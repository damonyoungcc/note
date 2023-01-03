import React, { useEffect, useMemo, useState } from 'react';

const App = () => {
  const [time, setTime] = useState(new Date());
  const [number, setNumber] = useState(100);

  // 时间一秒钟更新一下time值
  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  // 使用useMemo，则只有在number改变时，才会重新计算
  const dirtyWork = useMemo(() => {
    console.log('正在进行大量运算！');
    return number;
  }, [number]);

  return (
    <div>
      <h1>time: {time.getSeconds()}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.currentTarget.value)}
      />
      <h2>{dirtyWork}</h2>
    </div>
  );
};

export default App;
