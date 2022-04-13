import React from 'react';
import Counter from './Counter';
import CounterChild from './CounterChild';
import ShowElements from './ShowElements';
import {ElementsProvider} from './ElementsContext';


const Welcome = (props) => {
    console.log('Welcome - Parent of all components')
    return(
        <div>
        <h1>Welcome to our Counter Application!</h1>
        <ElementsProvider>
        <Counter render={<CounterChild/>}>
        </Counter>
        <ShowElements/>
        </ElementsProvider>
        </div>   
    );
}
export default Welcome;