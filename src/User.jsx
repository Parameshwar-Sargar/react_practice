import React from 'react'

import { useState } from 'react';

function User({name, role}) {

const [count , setCount] = useState(0);

const handelchange = ()=>{
    setCount(count+1)
}


  return (
    <div>
        <h1>This is User Component</h1>
        <input type="text" />
        <button onClick={handelchange}> Click for increse</button>
    </div>
  )
}

export default User;