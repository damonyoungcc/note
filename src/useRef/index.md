---
nav:
  title: 笔记
  order: 2
title: 'useRef'
toc: content
order: 3
---

## useRef

### 闭包问题

实现需求,进入页面 3 秒,输出当前最新的`count`值

- 在页面加载后,立即点击按钮
- 3 秒后打印的`count`值还为初始值`0`

<code src="./demos/demo1.tsx"></code>

### 使用`useRef`

```js
const countRef = useRef(count);
countRef.current = count;
```

<code src="./demos/demo2.tsx"></code>

### setState 是异步的

- 连续`setState`只会触发一次渲染
- setState 中传入函数，可以拿到当前最新值

<code src="./demos/demo3.tsx"></code>
