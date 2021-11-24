import React, { useState } from 'react';



const Count = ()=>{

    const [count, setCount]= useState(0);

    const countNumber = ()=>{
        setCount(count + 1)
        console.log(`count is ${count}`);
    }

    return (
        <>
            <div className="count">
                <h1>{count}</h1>
                <button onClick={countNumber}>click</button>
            </div>

        </>
    )
}


export default Count;