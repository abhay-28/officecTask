import React, { useContext } from 'react'
import { context } from './ComA'

const ComC = () => {
    const consumeContext = useContext(context)
    return (
        <h2>
         abhay {consumeContext}   
        </h2>
    )
}

export default ComC
