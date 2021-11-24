import React from 'react'

const List_items = (props)=>{
    
    return(
        <>
            <div className="todo_style">
            
                 <li className="list_style">
                     <span className='task_content'>
                        <span className='task_number'>{props.id}.</span>
                        {props.text}
                     </span>
                     <span className="list_btn_span"> 
                        <i className="fa fa-check-circle" onClick={()=>{
                            // props.onSelect_remove_item(props.id)
                            console.log(props.id,'my id');
                            
                        }} />
                        <i className="fa fa-times-circle" onClick={()=>{
                           props.onSelect(props.id)
                        }} />
                     </span>
                </li> 
            </div>
           
        </>
    )
}
export default List_items;