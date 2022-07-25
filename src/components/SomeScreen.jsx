import React from 'react';

const SomeScreen = () => {

    return(
        <div>
        {console.log(`SomeScreen is rendered.`)}
        <h1>Hi from SomeScreen.</h1>
        </div>
        
    );
}

// export default React.memo(CounterChild);
export default SomeScreen;