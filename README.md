### Example to demonstrate render optimised React Component

This is a React project which implements a basic basic web based counter, making use of Context Provider API for state management. This project demonstrates how the unwanted renders are avoided when the state changes.

Generally if the child components are wrapped using a Context Provider the, the child components will be re-rendered when the state changes even if the state is not consumed.

To aviod unwanted re-rendering of child components either of the below two steps can be used:

1. Memoize the child component using React.memo().

2. Pass down the child components as render props from the parent.
