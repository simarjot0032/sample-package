import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <>
      <div className="counter-container">
        <button className="increment-button-counter" onClick={increment}>
          +
        </button>
        <p className="count">{count}</p>
        <button className="decrement-button-counter" onClick={decrement}>
          -
        </button>
      </div>
    </>
  );
}
