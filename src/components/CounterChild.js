import React from 'react';

const CounterChild = () => {
    console.log('Child of Counter');
    return(
        <p>Hi I'm a child of counter.</p>
    );
}

// export default React.memo(CounterChild);
export default CounterChild;