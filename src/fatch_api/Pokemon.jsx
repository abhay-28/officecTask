import React, { useEffect, useState } from 'react';
import axios from 'axios'


const Pokemon = ()=>{
    const [num,update_num]=useState(1);
    const [name,update_name]=useState('');
    const [moves,update_moves]=useState(1);
    useEffect(()=>{
        async function getdata (){
            const respons = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            // console.log(respons)
            update_name(respons.data.name);
            update_moves(respons.data.moves.length);
        }

        getdata ()
    })

    return (
        <>
            <h1>you choose <span className="span_style_color">{num}</span> </h1>
            <h1>my name is <span className="span_style_color">{name}</span></h1>
            <h1> i have <span className="span_style_color">{moves}</span> moves</h1>
             <select value={num} onChange={(e)=>{
                 update_num(e.target.value)
                 console.log(e.target.value);
             }}>
                 <option value="1">1</option>
                 <option value="25">25</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
             </select>
                        
        </>
    ) 
}

export default Pokemon;