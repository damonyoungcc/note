import { useEffect, useReducer, useRef } from 'react';
import render from './renderer';

const Executor = (props) => {
  const store = props.hook();
  const mountRef = useRef(false);

  if (!mountRef.current) {
    props.onMount(store);
    mountRef.current = true;
  }

  useEffect(() => {
    props.onUpdate(store);
  });

  return null;
};

function createContainer(hook) {
  let store;
  const listeners = new Set();

  const onUpdate = (store) => {
    for (const listener of listeners) {
      listener(store);
    }
  };

  const onMount = (val) => {
    store = val;
  };

  render(<Executor onMount={onMount} hook={hook} onUpdate={onUpdate} />);

  function useContainer() {
    const storeRef = useRef(store);
    const [, forceUpdate] = useReducer((c) => c + 1, 0);

    useEffect(() => {
      function listener(newStore) {
        storeRef.current = newStore;
        forceUpdate();
      }

      listeners.add(listener);

      return () => listeners.delete(listener);
    }, []);

    return storeRef.current;
  }
  return useContainer;
}

export default createContainer;
