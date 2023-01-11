import React, { useCallback, useRef, useState } from 'react';

const useStateRef = (initialState) => {
  const [state, setState] = useState(initialState);
  const ref = useRef(state);

  const dispatch = useCallback((setStateAction) => {
    // setState的可能接收一个值或者函数
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
  const [count, setCount, getCount] = useStateRef(0);
  console.log('render');

  const increase = () => {
    setCount(count + 1);
    // 在setState后，可以立即拿到最新的state值
    console.log('count', getCount()); // 1
  };

  // 连续两次setState
  const increaseTwice = () => {
    setCount(count + 1);
    console.log('count', getCount()); // 1
    setCount((count) => count + 2);
    console.log('count', getCount()); // 3
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
