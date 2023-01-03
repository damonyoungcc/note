---
nav:
  title: 笔记
  order: 2
title: 'useMemo使用'
toc: content
order: 1
---

## useMemo 使用

### 性能问题

尽管`number`没有改变，每次`time`改变时，都会重新执行大量的运算

<code src="./demos/demo1.tsx"></code>

### 优化

使用 `useMemo` 进行优化后，只有 `number` 改变时，会重新进行大量计算

<code src="./demos/demo2.tsx"></code>

### `React.Memo`优化

<code src="./demos/demo3.tsx"></code>
