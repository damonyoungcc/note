import React, { useEffect, useRef, useState } from 'react';

function Demo() {
  console.log('111执行了');
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;
  console.log(countRef.current);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(countRef.current);
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
