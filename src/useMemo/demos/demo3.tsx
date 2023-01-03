import React, { useEffect, useState } from 'react';

function Foo() {
  const [number, setNumber] = useState(100);
  const dirtyWork = () => {
    console.log('正在进行大量运算！');
    return number;
  };

  return (
    <>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.currentTarget.value)}
      />
      <h2>{dirtyWork()}</h2>
    </>
  );
}

// 使用React.memo包裹组件Foo，时间变化时就不会造成Foo组件重新渲染
const PureFoo = React.memo(Foo);

const App = () => {
  const [time, setTime] = useState(new Date());

  // 时间一秒钟更新一下time值
  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  return (
    <div>
      <h1>time: {time.getSeconds()}</h1>
      <PureFoo />
    </div>
  );
};

export default App;
