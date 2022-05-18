import React, { useState } from 'react';

const Counter = ()=> {
    let a = 1;
    const [count, setCount]= useState(0);
    const incrementCount = ()=>{
        console.log("pre", count, a);
        count++;
        a++
        console.log("post",count, a);
    };
    return(
        <div>
            <h1>Counter App: {count}</h1>
            <button onclick={incrementCount}>Increment</button>
            <button>Decrement</button>
            <button>Double</button>
        </div>
    )
}

export default Counter;