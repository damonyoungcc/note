import React from 'react';

function createContainer(useHook) {
  const StoreContext = React.createContext();

  function useContainer() {
    // 子组件引用 context
    const store = React.useContext(StoreContext);
    return store;
  }

  function Provider(props) {
    const store = useHook();

    return (
      <StoreContext.Provider value={store}>
        {props.children}
      </StoreContext.Provider>
    );
  }

  return { Provider, useContainer };
}

export default createContainer;
