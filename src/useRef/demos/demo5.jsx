import React, { useCallback, useEffect, useRef, useState } from 'react';

const useStateRef = (initialState) => {
  const [state, setState] = useState(initialState);
  const ref = useRef(state);
  ref.current = state;

  const getState = useCallback(() => ref.current, []);
  return [state, setState, getState];
};

function Demo() {
  const [count, setCount, getCount] = useStateRef(0);

  const increase = () => {
    setCount(count + 1);
    // 这里并不能拿到最新值
    console.log('count', getCount());
  };

  useEffect(() => {
    const interval = setInterval(() => {
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
