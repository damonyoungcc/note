import React, { useReducer } from 'react';

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count: {state.count}</div>
      <button type="button" onClick={() => dispatch({ type: 'increase' })}>
        +
      </button>
      <button type="button" onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
    </div>
  );
};

export default App;
