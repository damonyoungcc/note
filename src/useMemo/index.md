---
nav:
  title: 笔记
  order: 2
title: 'useMemo使用'
toc: content
order: 1
---

## useMemo & useCallback 使用

### 性能问题

尽管`number`没有改变，每次`time`改变时，都会在组件渲染时重新执行大量的运算

<code src="./demos/demo1.tsx"></code>

### useMemo 优化

使用 `useMemo` 进行优化后，只有 `number` 改变时，会重新进行大量计算

<code src="./demos/demo2.tsx"></code>

### React.Memo 优化

抽离组件并使用`React.memo`包裹组件进行优化

<code src="./demos/demo3.tsx"></code>

### `React.Memo`失效

如果给 `React.memo` 的组件传递的 `props` 是一个引用类型，则优化会失效

<code src="./demos/demo4.tsx"></code>

### 使用`useMemo`优化引用类型

<code src="./demos/demo5.tsx"></code>

### 函数类型引用值

如果传递的是函数类型，因为函数类型也是引用类型，因此也会造成性能问题
此时可以使用`useMemo` 和 `useCallback`进行优化

- 使用`useMemo`时，还需要返回函数
- 使用`useCallback`语法糖时，则可以直接写函数

```js
// This:
React.useCallback(function helloWorld() {}, []);

// ...Is functionally equivalent to this:
React.useMemo(() => function helloWorld() {}, []);
```

<code src="./demos/demo6.tsx"></code>
