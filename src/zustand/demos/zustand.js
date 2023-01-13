import { useEffect, useMemo, useReducer, useRef } from 'react';

const create = (fn) => {
  let state = {};

  const listeners = new Set();

  const setState = (payload) => {
    Object.assign(state, payload);

    // 派发
    listeners.forEach((listener) => {
      listener(state);
    });
  };

  const subscribe = (fn) => {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  };

  const getState = () => {
    return state;
  };

  state = fn(setState, getState, {
    setState,
    getState,
  });

  const useStore = (selectorFn) => {
    const value = useRef(useMemo(() => selectorFn(state), []));
    const [, forceUpdate] = useReducer((s) => s + 1, 0);

    useEffect(() => {
      return subscribe((newState) => {
        const newValue = selectorFn(newState);
        if (value.current !== newValue) {
          // 触发更新
          // {a:{b:{c:d...}}}
          // immer
          value.current = newValue;
          forceUpdate();
        }
      });
    }, []);

    return value.current;
  };

  return useStore;
};

export default create;
