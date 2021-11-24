import React, { useState } from 'react';
import List_compo from '../todo list/List_compo.jsx';

const Todo_list = ()=>{

const[listItems,NewListItes]=useState('');
const[listItems2,NewListItes2]=useState([
   {name: 'abhay',id:1},{name: 'ajay',id:2},{name: 'rohit',id:3},{name: 'kartikey',id:4},{name: 'mallah',id:5}
]);

const inputListItem = (e)=>{
    // console.log(e.target.value);
    NewListItes(e.target.value)
}

const addListItem = ()=>{
   
    if(listItems.trim().length > 0){
        NewListItes2((oldListItems)=>{
            // console.log(oldListItems);
           return ([...oldListItems,{id:Date.now(),name:listItems}].filter(Boolean))
        }) 
        NewListItes('');
    }
    
    
}
const Remaining_item = (e,name)=>{
    console.log(NewListItes2 ,'selected');
console.log(name,'abhay222');
    NewListItes2((oldListItems)=>{
      return  oldListItems.filter((arrEle, index )=>{
            return arrEle.id !== e;
      });   
       
    })  
    
}

console.log(Remaining_item,'abhay')
const completed_item = (e)=>{
//    const Remaining_item_array = [...NewListItes2]

// // its showing some error while im trying to dublicake the NewListItes2 array using spred operator need to ask or work on it.

//     Remaining_item_array((oldListItems)=>{
//         console.log(oldListItems,'abhay');
//         let data =   oldListItems.splice(e,1); 
//         console.log(data,'data');
//       }) 


//     // const completed_item=(e)=>{
        
        
//     // }
//     // completed_item()
     
    
}
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1> ToDO List</h1>
                    <br/>
                    <input type="text" placeholder='Add items' onChange={inputListItem} value={listItems}/>
                    <button onClick={addListItem}> + </button>
                    
                    <ol>
                        {listItems2.map((e)=>{
                            return (
                                <List_compo 
                                key={e.id} 
                                id={e.id} 
                                text={e.name}
                                onSelect_completed_item={completed_item}
                                onSelect_Remaining_item={Remaining_item}
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