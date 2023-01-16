---
nav:
  title: 笔记
  order: 2
title: '状态管理方案'
toc: content
order: 1
---

## 状态管理方案分析

### 1.`unstated-next`

先利用`useContext` 和 自定义`hook`实现一个计数器
<code src="./demos/demo1.jsx"></code>

封装 `context` 的定义和引用步骤，抽象成公共方法，传入需要的自定义 `hook`
封装一个`createContainer`方法
<code src="./demos/demo2/index.jsx"></code>

### 2.实现一个简易`hox`

`Context`的缺点：

- `Context` 需要嵌套 `Provider` 组件，一旦代码中使用多个 `context`，将会造成嵌套地狱，组件的可读性和纯粹性会直线降低，从而导致组件重用更加困难。
- `Context` 可能会造成不必要的渲染。一旦 `context` 里的 `value` 发生改变，任何引用 `context` 的子组件都会被更新。

大致思路：

- 订阅更新： 初始化执行 `Hook` 的时候，需要收集哪些 `Component` 使用了 `Store`
- 感知变更： `Hook` 中的行为能够改变 `Store` 的状态，也要能被 `Store` 所感知到
- 发布更新： `Store` 一旦变更，需要驱动所有订阅更新的 `Component` 更新

1. 状态初始化

```js
function createContainer(hook) {
  const store = hook();

  // 代替之前用context做的全局状态管理，这里使用ref
  function useContainer() {
    const storeRef = useRef(store);
    return storeRef.current;
  }
  return useContainer;
}

// 业务代码使用：API简洁
const useContainer = createContainer(useCount);

const Timer = () => {
  const store = useContainer();
  // 组件内 render 部分先省略
};
```

2. 订阅更新

为了实现`Store`状态更新时驱动组件更新，需要定义一个`listeners`集合，在组件初始化时往数组添加 `listener`回调，订阅状态的更新

```js
function createContainer(hook) {
  const store = hook();

  const listeners = new Set();

  function useContainer() {
    const storeRef = useRef(store);
    const [, forceUpdate] = useReducer((c) => c + 1, 0);

    function listener(newStore) {
      forceUpdate();
      storeRef.current = newStore;
    }

    useEffect(() => {
      listeners.add(listener); // 初始化的时候添加回调，订阅更新

      return () => listeners.delete(listener); // 组件销毁的时候移除回调
    }, []);
    return storeRef.current;
  }

  return useContainer;
}
```

<code src="./demos/demo3/index.jsx"></code>

### 实现一个类似`zustand`的状态管理

<code src="./demos/demo4/index.jsx"></code>
