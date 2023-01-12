import React, { useCallback, useRef, useState } from 'react';

// 自定义hoook
const useStateRef = (initialState) => {
  const [state, setState] = useState(initialState);
  const ref = useRef(state);

  const dispatch = useCallback((setStateAction) => {
    // setState可能接收一个值或者函数,因此这里需要做判断
    ref.current =
      typeof setStateAction === 'function'
        ? setStateAction(ref.current)
        : setStateAction;
    setState(ref.current);
  }, []);

  const getState = useCallback(() => ref.current, []);
  return [state, dispatch, getState];
};

function Demo() {
  console.log(`I'm render!`);
  const [count, setCount, getCount] = useStateRef(0);

  const increase = () => {
    setCount(count + 1);
    // 在setState后，可以立即拿到最新的state值
    console.log('count', getCount()); // 1
  };

  // 连续多次setState
  const increaseTwice = () => {
    setCount(count + 1);
    console.log('count', getCount()); // 1
    setCount(count + 2);
    console.log('count', getCount()); // 2
    setCount((count) => count + 2);
    console.log('count', getCount()); // 4
  };

  return (
    <>
      <div>count: {count}</div>
      <button type="button" onClick={increase}>
        click
      </button>
      <button type="button" onClick={increaseTwice}>
        click Twice
      </button>
    </>
  );
}

export default Demo;
