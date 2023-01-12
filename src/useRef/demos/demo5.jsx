import React, { useCallback, useEffect, useRef, useState } from 'react';

const useStateRef = (initialState) => {
  const [state, setState] = useState(initialState);
  const ref = useRef(state);
  // 此处只是使用ref记录下最新的state值
  ref.current = state;
  const getState = useCallback(() => ref.current, []);
  // 导出时,state 和 setState都原样导出
  return [state, setState, getState];
};

function Demo() {
  const [count, setCount, getCount] = useStateRef(0);

  const increase = () => {
    // 这里调用setState,只是更新了ref的current值,此时的count还未更新,
    // 因此立即使用getCount()获取不到count最新值
    setCount(count + 1);
    // 这里并不能拿到最新值
    console.log('count', getCount()); // 0
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // 只是解决了闭包问题,更新count值后,3秒后就可以打印出最新的count值
      console.log('interval count', getCount());
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>count: {count}</div>
      <button type="button" onClick={increase}>
        click
      </button>
    </>
  );
}

export default Demo;
