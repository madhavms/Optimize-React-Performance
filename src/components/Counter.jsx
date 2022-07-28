import React, { useContext, useState } from "react";
import { CounterContext } from "./CounterContext";

const Counter = props => {
  const [count, setCount] = useContext(CounterContext);

  const incrementCount = e => {
    setCount(prevCount => prevCount + 1);
  };

  const resetCount = e => {
    setCount(0);
  };
  return (
    <div>
      {console.log("Counter component rendered.")}
      <p>The count is: {count}</p> {/*state from context provider*/}
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={resetCount} style={{ margin: "10px" }}>
        Reset Count
      </button>
      {props.somescreen}
    </div>
  );
};
export default Counter;
