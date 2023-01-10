import React from 'react';
import { create } from 'zustand';
import { shallow } from 'zustand/shallow';

interface State {
  bears: number;
  cat: number;
  increase: () => void;
  removeAllBears: () => void;
  increaseCat: () => void;
}

const useStore = create<State>()((set) => ({
  bears: 0,
  cat: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  increaseCat: () => set((state) => ({ cat: state.cat + 1 })),
  removeAllBears: () => set({ bears: 0, cat: 0 }),
}));

function BearCounter() {
  console.log('112');
  const { bears, cat } = useStore(
    (state) => ({ bears: state.bears, cat: state.cat }),
    shallow,
  );
  return (
    <>
      <h1>{bears} bears around here ...</h1>
      <h1>{cat} cat around here ...</h1>
    </>
  );
}

function Controls() {
  console.log('113');
  const increasePopulation = useStore((state) => state.increase);
  const removeAllBears = useStore((state) => state.removeAllBears);
  const increaseCat = useStore((state) => state.increaseCat);
  return (
    <>
      <button type="button" onClick={increasePopulation}>
        one up bears
      </button>
      <button type="button" onClick={increaseCat}>
        one up cat
      </button>
      <button type="button" onClick={removeAllBears}>
        remove
      </button>
    </>
  );
}

function App() {
  console.log('111');
  return (
    <>
      <BearCounter />
      <Controls />
    </>
  );
}

export default App;
