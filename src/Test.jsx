// import Demo from "./Demo";
import React from "react";

import { useState } from "react";


function Test(){
    const [count , setCount]  = useState (0);
    const [incValue , setincValue] = useState("");

    const handleIncrease =(e)=>{
           setCount(count + 5);  
        };

     const handleDecrease = () =>{
            setCount(count - 2);
        };

         const handleincresedByUser =()=>{
            setCount( count + Number(incValue));
        };


    return(
    
    <div>
        <h1>this is the test component</h1>

       <h1> Count : {count}</h1>

       <button onClick={handleIncrease}>click increse</button>
       <button onClick={handleDecrease} > count decress</button>

       <input type="text" placeholder="Enter how mutch incress" value={incValue} onChange={(e)=> setincValue(e.target.value)} />
        <button onClick={handleincresedByUser}  > count increserd by </button>

    </div>
    )
}


export default Test;