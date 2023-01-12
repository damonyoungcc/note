---
nav:
  title: 笔记
  order: 2
title: 'useRef'
toc: content
order: 2
---

## useRef

### 1.闭包问题

实现需求,进入页面 3 秒,输出当前最新的`count`值

- 在页面加载后,立即点击按钮
- 3 秒后打印的`count`值还为初始值`0`

<code src="./demos/demo1.tsx"></code>

### 2.使用`useRef`解决闭包问题

使用 `useRef` 可以记录最新的 `state` 值

```js
const countRef = useRef(count);
countRef.current = count;
```

<code src="./demos/demo2.tsx"></code>

### 3.`setState` 是异步的

- 连续`setState`只会触发一次渲染
- `setState` 中传入函数，可以拿到当前最新值

<code src="./demos/demo3.tsx"></code>

### 4.`useRef` 实现 `useStateRef`

实现一个 `useStateRef`自定义`hook`，原理就是利用`useRef`保存最新的`state`值

```js
// getCount可以拿到最新的state值
const [count, setCount, getCount] = useStateRef(0);
```

<code src="./demos/demo4.jsx"></code>

:::warning
👆 这种做法其实并不符合`hook`的规范,因此`ahooks`中`useGetState`的实现只是解决了闭包问题,并不能可以立即获取最新的`state`值,看 👇🏻 这个例子
:::

### 5.阅读一下 `ahooks` 的 `useGetState` 源码

- `ahooks` 并没有提供像上述自定义 `hook` 可以立即获取最新 `state` 值的 `hook`
- 原因是这样并不符合 `hook` 的规范，只是提供了 `useGetState` 解决了闭包问题

<code src="./demos/demo5.jsx"></code>
