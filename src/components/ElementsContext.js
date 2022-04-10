import React, {createContext, useState} from 'react';

// creating context
export const ElementsContext = createContext();

// context provider
export const ElementsProvider = (props) => {
    const [elements, setElements] = useState([]);

    return(<ElementsContext.Provider value={[elements, setElements]}>
        {props.children}
        </ElementsContext.Provider>);
}
