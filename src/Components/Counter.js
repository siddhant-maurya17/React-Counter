import React,{useState} from 'react';

const Counter=()=>{
    let [count,setCount]=useState(0);
    return (
        <div className='container'>
           <p>{count}</p>
           <button onClick={()=>setCount(count+1)}>+</button>
           <button onClick={()=>setCount(count-1)}>-</button>
           <button onClick={()=>setCount(0)}>R</button>
        </div>
    )
}

export default Counter;