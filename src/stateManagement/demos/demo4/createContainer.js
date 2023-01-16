import { useEffect, useReducer, useRef } from 'react';

function createContainer(hook) {
  let store;
  const listeners = new Set(); // 定义回调集合

  const onUpdate = (store) => {
    for (const listener of listeners) {
      listener(store);
    }
  };

  const setState = (partial) => {
    const nexStore = partial(store);
    // hook中一旦执行 setState 的操作，且状态变更后，将触发 onUpdate 更新
    if (nexStore !== store) {
      store = Object.assign({}, store, nexStore);
      onUpdate(store);
    }
  };

  // 初始化状态
  store = hook(setState);

  // 提供给子组件的 API 方法
  function useContainer() {
    const storeRef = useRef(store);
    const [, forceUpdate] = useReducer((c) => c + 1, 0);

    useEffect(() => {
      function listener(newStore) {
        storeRef.current = newStore;
        forceUpdate();
      }

      listeners.add(listener); // 初始化的时候添加回调，订阅更新

      return () => listeners.delete(listener); // 组件销毁的时候移除回调
    }, []);

    return storeRef.current;
  }
  return useContainer;
}

export default createContainer;
