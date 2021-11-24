import React,{useState} from 'react'

const DigitalClock = ()=>{

const[time,Ctime] = useState(new Date().toLocaleTimeString('en-US',{hour12:true}));

    return(
        <h1>{time}</h1>
    )
}

export default DigitalClock;