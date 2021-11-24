import React, { useState } from 'react';
import List_items from './List_items';
import './todo.css';


const Todo_list = ()=>{

const[listItems,NewListItes]=useState('');
const[listItems2,NewListItes2]=useState([
    'abhay','ajay','rohit'
]);

const inputListItem = (e)=>{
    // console.log(e.target.value);
    NewListItes(e.target.value)
}

const addListItem = ()=>{
    NewListItes2((oldListItems)=>{
        // console.log(oldListItems);
        let taskArray = [...oldListItems,listItems].filter(Boolean)
       return ([...new Set(taskArray)])   // need to ask kartikey about this new set fun
    })    
    NewListItes('');    
}
const remove_item = (e)=>{
    NewListItes2((oldListItems)=>{
      return  oldListItems.filter((arrEle,index )=>{
            return index !== e;
      });       
    })  
}
const handleKeypress = e => {
    if(e.charCode==13){ 
        addListItem();
      } 
  };
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1> ToDO List</h1>
                    <br/>
                    <input type="text" placeholder='Add items' 
                        onChange={inputListItem}  
                        onKeyPress={handleKeypress} 
                        value={listItems}
                    />

                    <button className="taskSubmit_btn"
                        onClick={addListItem}
                    > <i className="fa fa-plus" /> </button>
                    
                    <ol>
                        {listItems2.map((e,i)=>{
                            return (
                                <List_items 
                                key={i} 
                                id={i} 
                                text={e}
                                onSelect={remove_item}
                                
                                />
                            );
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Todo_list;