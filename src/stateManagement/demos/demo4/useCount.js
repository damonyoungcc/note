import createContainer from './createContainer';

function useCount(setState) {
  const increment = () =>
    setState((state) => ({ ...state, count: state.count + 1 }));
  const decrement = () =>
    setState((state) => ({ ...state, count: state.count - 1 }));
  return { count: 0, increment, decrement };
}

export default createContainer(useCount);
