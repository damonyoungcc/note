import React from 'react';
import { create } from 'zustand';

interface BearState {
  bears: number;
  increase: () => void;
  removeAllBears: () => void;
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: () =>
    set((state: { bears: number }) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

function BearCounter() {
  console.log('112');
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  console.log('113');
  const increasePopulation = useBearStore((state) => state.increase);

  const removeAllBears = useBearStore((state) => state.removeAllBears);
  return (
    <>
      <button type="button" onClick={increasePopulation}>
        one up
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
