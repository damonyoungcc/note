import React, { useEffect, useState } from 'react';

const App = () => {
  const [time, setTime] = useState(new Date());
  const [number, setNumber] = useState(100);

  // 时间一秒钟更新一下time值
  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  // 每次更新时间时，尽管number没有改变，此处都要打印
  const dirtyWork = () => {
    console.log('正在进行大量运算！');
    return number;
  };

  return (
    <div>
      <h1>time: {time.getSeconds()}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.currentTarget.value)}
      />
      <h2>{dirtyWork()}</h2>
    </div>
  );
};

export default App;
