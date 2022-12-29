import React, { useEffect, useState } from 'react';

/**
 * 1、start, render 2、trigger useEffect, start, render 3、trigger useEffect, start, render
 * 第三次渲染的原因是，第二次setValue造成了value的变化，useEffect没写deps依赖
 * 相当于第三次set了相同的值
 */

const Test = () => {
  console.log('start');
  const [value, setValue] = useState('Hello World');
  useEffect(() => {
    console.log('trigger useEffect');
    // 这里如果set的是一个对象，则会造成死循环
    setValue('Another Hello World');
  });

  console.log('render');
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Test;
