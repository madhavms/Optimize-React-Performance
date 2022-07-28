import React, { createContext, useState } from "react";

// creating context
export const CounterContext = createContext();

// context provider
export const CounterProvider = props => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={[count, setCount]}>
      {props.children}
    </CounterContext.Provider>
  );
};
