import React, { useContext, useState } from 'react';

const StoreContext = React.createContext();

const useCount = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};

const Timer = () => {
  const store = useContext(StoreContext);
  const { count, increment, decrement } = store;
  return (
    <>
      <div>Count: {count}</div>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
    </>
  );
};

const App = () => {
  const store = useCount();
  return (
    <StoreContext.Provider value={store}>
      <Timer />
    </StoreContext.Provider>
  );
};

export default App;
