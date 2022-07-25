import React, {useContext, useState} from 'react';
import {CounterContext} from './CounterContext';
import SomeScreen from './SomeScreen';

const Counter = (props) => {
const [count, setCount] = useContext(CounterContext);
const [toggleProps, setToggleProps] = useState(true);

const incrementCount = (e) => {
    setCount(prevCount => prevCount + 1);
}

const resetCount = (e) => {
    setCount(0);
}
return(
    <div>
    {console.log('Counter component rendered.')}
    <p>The count is: {count}</p> {/*state from context provider*/}
    <button onClick={incrementCount}>Increment Count</button>
    <button onClick={resetCount} style={{'margin':'10px'}}>Reset Count</button>
    <p>{toggleProps ? '(somescreen as render props)' : '(somescreen as child component)'}</p>
    <button onClick={() => setToggleProps(prev => !prev)}>Toggle Props</button>
    {toggleProps ? props.somescreen : <SomeScreen/>}
    </div>
);
};
export default Counter;