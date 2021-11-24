// in this demo task i have maintain the sate of counter which i'm update on 
// onClick event and After every second using setInterval()
// and also used useEffect hooks to clear interval 



import React, { useEffect, useState } from 'react'

const CompA = () => {
    const [count, setCount] = useState({
        counter1: 0,
        counter2: 0,
    })
    const incrementAfterOneSec = () => setCount({
        ...count,
        counter2: count.counter2 + 1,

    })

    const incrementOnclick = () => setCount({
        ...count,
        counter1: count.counter1 + 1,

    })

    return (
        <div>
            <h1>props passing from A 2 B</h1>
            <CompB incrementAfterOneSec={incrementAfterOneSec} incrementOnclick={incrementOnclick} count={count} />
        </div>
    )
}

export default CompA

// children

export const CompB = ({ count, incrementAfterOneSec, incrementOnclick }) => {

    useEffect(() => {
        const interval = setInterval(() => incrementAfterOneSec({
            ...count,
            counter2: count.counter2 + 1,
        }), 500);
        return () => {
            clearInterval(interval);
        };
    }, [count]);

    return (
        <div>
            <button className='btn border border-primary m-5'>i will update after each sec <b>{count.counter2}</b></button>
            <button className='btn border border-primary m-5' onClick={incrementOnclick}>please cliked me to increase my Count <b>{count.counter1}</b> </button>

        </div>
    )
}
