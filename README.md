### Example to demonstrate render optimised React Component

This is a React project which implements a basic basic web based counter, making use of Context Provider API for state management. This project demonstrates how the unwanted renders are avoided when the state changes.

Generally if the child components are wrapped using a Context Provider the, the child components will be re-rendered when the state changes even if the state is not consumed.

To aviod unwanted re-rendering of child components either of the below two steps can be used:

1. Memoize the child component using React.memo().

2. Pass down the child components as render props from the parent.


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

#### Child component re-renders when parent updates:
[![Watch the video](https://github.com/madhavms/React-Context-Provider-Example/blob/master/Images/video_1.png)](https://www.youtube.com/watch?v=ozueVnfPuTQ)


It can be seen from the recording that when the context is updated the child component also re-renders even though it doesn’t use context. This is as expected since React causes the child components to re-render when the
state of the parent component changes. It is described well in this article: 
[Link to Re-rendering in React](https://www.geeksforgeeks.org/re-rendering-components-in-reactjs/)

So there are two ways of avoiding re-render:

1. Memoize the child component using React.memo(ChildComponent).

   React.memo is a higher order component.

   If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by          memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

   React.memo only checks for prop changes. If your function component wrapped in React.memo has a useState, useReducer or useContext Hook in its            implementation, it will still rerender when state or context change.


![alt text](https://github.com/madhavms/React-Context-Provider-Example/blob/master/Images/7.png)

2. Instead of writing the child component inside the parent pass it as render props to the parent component.

![alt text](https://github.com/madhavms/React-Context-Provider-Example/blob/master/Images/8.png)

In the below video it is clearly seen that the child component is not re-rendered on
context change in the parent when the child component is passed as render props to
the parent.

#### Child component doesn't re-render since its passed as render props:

[![Watch the video](https://github.com/madhavms/React-Context-Provider-Example/blob/master/Images/video_2.png)](https://www.youtube.com/watch?v=Flmqbb8rDXQ)
