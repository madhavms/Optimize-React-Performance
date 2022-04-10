import React, {useContext} from 'react';
import {ElementsContext} from './ElementsContext';

const ShowElements = () => {
    const [elements, setElements] = useContext(ElementsContext);

    return(
        <div>
        {elements.map(element => (<li key={element}>{element}</li>))}
        </div>
    );
}

export default ShowElements;





