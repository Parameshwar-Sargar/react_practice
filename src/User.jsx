import React from 'react'

import { useState } from 'react';

function User() {

const [count , setCount] = useState(0);
const [incValue , setincValue] = useState(0);

const handelchange = ()=>{
    setCount(count+incValue);
}


  return (
    <div>
        <h1>Count : { count}</h1>
       <input type="number" value={incValue} onChange={(e)=>setincValue (Number(e.target.value))}  />
        <button onClick={handelchange}> Click for increse</button>
    </div>
  )
}

export default User;