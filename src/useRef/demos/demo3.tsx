import React, { useState } from 'react';

function Demo() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  // 连续两次setState只会触发渲染一次
  console.log('我执行了!');
  const increase = () => {
    // setCount执行并没有改变本轮渲染中count的值
    setCount(count + 1);
    // count值在执行useState时就确定了, 无法拿到最新的值
    console.log('count', count);
  };

  const increaseNum = () => {
    setNum(num + 1);
    console.log('num 执行');
    setNum((preValue) => {
      // 这里可以拿到当前最新值
      console.log('num', preValue);
      return preValue;
    });
  };

  return (
    <>
      <div>
        count: {count} num: {num}
      </div>
      <button type="button" onClick={increase}>
        click
      </button>
      <button type="button" onClick={increaseNum}>
        click num
      </button>
    </>
  );
}

export default Demo;
