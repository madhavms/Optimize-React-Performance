import React, {useContext} from 'react';
import {CounterContext} from './CounterContext';
import {ElementsContext} from './ElementsContext';
const Counter = (props) => {
console.log('Counter - Child of Welcome. I use context.');
const [count, setCount] = useContext(CounterContext);
const [elements, setElements] = useContext(ElementsContext);

const incrementCount = (e) => {
    setCount(prevCount => prevCount + 1);
    setElements(prevElements => [...prevElements, 'Element'+(Number(count)+1)]);
}

const resetCount = (e) => {
    setCount(0);
    setElements(prevElements => []);
}
return(
    <div>
    <p>The count is: {count}</p>
    <button onClick={incrementCount}>Increment Count</button>
    <button onClick={resetCount} style={{'margin':'10px'}}>Reset Count</button>
    {props.render}
    </div>
);
};
export default Counter;