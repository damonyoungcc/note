import React, { useEffect, useState } from 'react';

function Foo({}: { arr: string[] }) {
  const [number, setNumber] = useState('100');
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

const PureFoo = React.memo(Foo);

const App = () => {
  const [time, setTime] = useState(new Date());
  const [bar] = useState('asd');

  // 每次App渲染arr都会被重新定义，数组是引用类型，所以会造成每次Foo组件都会渲染
  const arr = [bar];

  // 时间一秒钟更新一下time值
  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  return (
    <div>
      <h1>time: {time.getSeconds()}</h1>
      <PureFoo arr={arr} />
    </div>
  );
};

export default App;
