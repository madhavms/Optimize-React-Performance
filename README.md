### React Context Provider

This is a React project which implements a basic basic web based counter, making use of Context Provider API for state management. This project serves as a test to re-affirm that while using the Context API only the components which are subscibed to the provider and their children re-render.

Also during the course of the project it was seen that the children of the components subscribed to the provider wont re-render in the below scenarios:

1. When the child component is memoized using React.memo().

2. When the child component was passed to the parent component as a render prop.
