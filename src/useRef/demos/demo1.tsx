import React, { useEffect, useState } from 'react';

function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // 这里会有闭包问题
      console.log(count);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div>{count}</div>
      <button type="button" onClick={() => setCount(count + 1)}>
        click
      </button>
    </>
  );
}

export default Demo;
