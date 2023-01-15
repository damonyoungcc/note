import React from 'react';
import useContainer from './useCount';

const Timer = () => {
  const store = useContainer() || {};
  return (
    <>
      <button type="button" onClick={store.decrement}>
        -
      </button>
      <span>{store.count}</span>
      <button type="button" onClick={store.increment}>
        +
      </button>
    </>
  );
};

export default Timer;
