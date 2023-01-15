import React, { useContext, useReducer } from 'react';

const initialState = {
  theme: 'light',
  clickType: 'top',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'top':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
        clickType: 'top',
      };
    case 'bottom':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
        clickType: 'bottom',
      };
    default:
      return state;
  }
};

const ThemeContext = React.createContext();

const Top = () => {
  const { dispatch, state } = useContext(ThemeContext);
  return (
    <div
      style={{
        display: 'flex',
        height: '80px',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: '10px',
        backgroundColor: `${
          state.clickType === 'top'
            ? '#ccc'
            : state.theme === 'dark'
            ? '#000'
            : '#fff'
        }`,
        color: `${
          state.clickType === 'top'
            ? '#000'
            : state.theme === 'dark'
            ? '#fff'
            : '#000'
        }`,
      }}
    >
      <div onClick={() => dispatch({ type: 'top' })}>更换颜色</div>
    </div>
  );
};

const Bottom = () => {
  const { dispatch, state } = useContext(ThemeContext);
  return (
    <div
      style={{
        display: 'flex',
        height: '80px',
        alignItems: 'center',
        border: '1px solid #ccc',
        padding: '10px',
        backgroundColor: `${
          state.clickType === 'bottom'
            ? '#ccc'
            : state.theme === 'dark'
            ? '#000'
            : '#fff'
        }`,
        color: `${
          state.clickType === 'bottom'
            ? '#000'
            : state.theme === 'dark'
            ? '#fff'
            : '#000'
        }`,
      }}
    >
      <div onClick={() => dispatch({ type: 'bottom' })}>更换颜色</div>
    </div>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ dispatch, state }}>
      theme: {state.theme}
      <div
        style={{
          padding: '20px 50px',
          backgroundColor: `${state.theme === 'dark' ? '#000' : '#fff'}`,
        }}
      >
        <Top />
        <Bottom />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
