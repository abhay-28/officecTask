import React from 'react';
import {FirstName,LastName} from '../App';

const Comp_C = ()=>{
    
    return (
        <>
             <FirstName.Consumer>
                 {(fname)=>{
                   return <LastName.Consumer>
                        {(lname)=>{
                             return <h1>my name is {fname} {lname} </h1>
                        }}
                    </LastName.Consumer>
                 }}
             </FirstName.Consumer>
                        
        </>
    )
}

export default Comp_C;