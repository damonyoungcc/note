import React, { useCallback } from 'react';

function MegaBoost({ handleClick }: { handleClick: () => void }) {
  console.log('MegaBoost 渲染!');

  return (
    <>
      <button onClick={handleClick} type="button">
        MEGA BOOST!
      </button>
    </>
  );
}

const PureMegaBoost = React.memo(MegaBoost);

const App = () => {
  const [count, setCount] = React.useState(0);

  // 可以使用useMemo优化，但是React提供了useCallBack语法糖
  // const handleMegaBoost = useMemo(() => {
  //   return () => setCount((currentValue: number) => currentValue + 1234);
  // }, []);

  const handleMegaBoost = useCallback(() => {
    setCount((currentValue: number) => currentValue + 1234);
  }, []);

  return (
    <>
      <div>
        <div>Count: {count}</div>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click me!
        </button>
      </div>
      <div>--------------</div>
      <PureMegaBoost handleClick={handleMegaBoost} />
    </>
  );
};

export default App;
