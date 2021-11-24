import React, { useState } from 'react'

const Hoc = () => {

    return (
        <div>
            <h1>HOC</h1>
            <HOCRed cmp={Counter} />
            <HOCGreen cmp={Counter} />
            <Counter />
        </div>
    )
}

const HOCRed = (props) => {
    return <h1 style={{ backgroundColor: 'red' }}> <props.cmp /></h1>
}
const HOCGreen = (props) => {
    return <h1 style={{ backgroundColor: 'green' }}> <props.cmp /></h1>
}

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>click</button>
        </div>
    )
}
export default Hoc