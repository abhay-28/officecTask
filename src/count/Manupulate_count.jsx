import React, { useState } from 'react';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const Manupulate_count =()=>{

    const[count,update_count] = useState(0);


 const increment =()=>{

    update_count(count + 1)
 }
 const decrement =()=>{
    
    if(count !== 0){
        update_count(count - 1)
        
    }
    else{
        alert(`now u can't decrement value anymore its already 0`)
    }

    
}
    return(
            <>
                <h1>Manupulate_count</h1>
                <div className="outter_div">
                    <h1>{count} </h1>
                    <Tooltip title="increment">
                        <Button className='red_btn' onClick={increment}><AddOutlinedIcon/></Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button className='green_btn' onClick={decrement}><RemoveOutlinedIcon/></Button>
                    </Tooltip>
                    
                </div>
            </>
    );
}






export default Manupulate_count;