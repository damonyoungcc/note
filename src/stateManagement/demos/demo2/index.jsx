import React from 'react';
import Timer from './Timer';
import Store from './useCount';

const App = () => {
  return (
    <Store.Provider>
      <Timer />
    </Store.Provider>
  );
};

export default App;
