### React Context Provider

This is a React project which implements a basic basic web based counter, making use of Context Provider API for state management. This project serves as a test to re-affirm that while using the Context API only the components which are subscibed to the provider and their children re-render.

Also during the course of the project it was seen that the children of the components subscribed to the provider wont re-render in the below scenarios:

1. When the child component is memoized using React.memo().

2. When the child component was passed to the parent component as a render prop.


### Context Provider:

Here 'Welcome' is the parent component which is shown below. It has a child component
called 'Counter'.

![alt text](https://github.com/madhavms/React-Context-Provider-Example/blob/master/Images/1.png)

The <Counter/> component is shown below. This accesses state from the context provider.

![alt text](https://github.com/madhavms/React-Context-Provider-Example/blob/master/Images/2.png)

Below shown is 'CounterChild', the child of the 'Counter' component. We console log
inside these components to understand whether the child component would re-render when
the context state is modified from the parent component 'Counter'.

![alt text](https://github.com/madhavms/React-Context-Provider-Example/blob/master/Images/3.png)

Below shown is the 'ContextProvider' which is a wrapper component that provides the
values to be accessed by children using Context API:

![alt text](https://github.com/madhavms/React-Context-Provider-Example/blob/master/Images/4.png)

In the 'App' component, we can see that only the 'Welcome' component is written since
it's the parent component for the other components and wraps them.

![alt text](https://github.com/madhavms/React-Context-Provider-Example/blob/master/Images/5.png)

The react render is written in the index.js file:

![alt text](https://github.com/madhavms/React-Context-Provider-Example/blob/master/Images/6.png)

[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://www.youtube.com/watch?v=ozueVnfPuTQ)

It can be seen from the recording that when
the context is updated the child component also re-renders even though it doesn’t use
context. This is as expected since React causes the child components to re-render when the
state of the parent component changes. It is described well in this article: Re-rendering in
React.
So there are two ways of avoiding re-render:
● Memoize the child component using React.memo(ChildComponent).
export default React.memo(CounterChild);
● Instead of writing the child component inside the parent pass it as render props to the
parent component.
import React, {useContext} from 'react';
import {CounterContext} from './CounterContext';
const Counter = (props) => {
console.log('Counter - Child of Welcome. I use context.');
const [count, setCount] = useContext(CounterContext);
const incrementCount = (e) => {
setCount(prevCount => prevCount + 1);
}
const resetCount = (e) => {
setCount(0);
}
return(
<div>
<p>The count is: {count}</p>
<button onClick={incrementCount}>Increment Count</button>
<button onClick={resetCount} style={{'margin':'10px'}}>Reset
Count</button>
{props.render} //This render child component passed as render prop
</div>
);
};
export default Counter;
It can be seen below that the child component is passed as render props inside the
parent component.
import React from 'react';
import Counter from './Counter';
import CounterChild from './CounterChild';
const Welcome = (props) => {
console.log('Welcome - Parent of all components')
return(
<div>
<h1>Welcome to our Counter Application!</h1>
<Counter render={<CounterChild/>}>
</Counter>
</div>
);
}
export default Welcome;
In the below video it is clearly seen that the child component is not re-rendered on
context change in the parent when the child component is passed as render props to
the parent.
Child Components passed as render props.
