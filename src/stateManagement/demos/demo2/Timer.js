import React from 'react';
import Store from './useCount';

const Timer = () => {
  const store = Store.useContainer();

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
