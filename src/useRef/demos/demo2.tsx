import React, { useEffect, useRef, useState } from 'react';

function Demo() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

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
