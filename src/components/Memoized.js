//this is an example use of a memoized function. 
// A memoized function can be used to improve performance
// the function can only be triggered on the first render and when the dependency value changes.
import React, { useState, useMemo } from 'react';
export const Memoized = () => {
  const [num, setNum] = useState(1);
  const [inc, setInc] = useState(0); // testing a state to trigger re-renders
  const fib = useMemo(() => fibonacci(num), [num]);
function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
 return (
    <div>
      <h1>Fibonacci of {num} is {fib}</h1>
      <button onClick={() => setNum(num + 1)}>Next Fibonacci Number</button>
      <button onClick={() => setInc(inc + 1)}>Re-render</button>
    </div>
  );
};

export default Memoized;
