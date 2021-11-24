// passing data from parent to grand children to avoid props driling 


import React, { createContext } from 'react'
import ComB from './ComB'

const context = createContext()

const ComA = () => {
    return (
        <context.Provider value={`we did it`} >
            <ComB />
        </context.Provider >
    )
}

export default ComA
export {context}