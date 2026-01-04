import React from "react";
import { useState } from "react";

function ClickCounter({tittle}){

    const [count , setCount] = useState (0);

   function handelchange(){
    setCount(count + 1);

   }

   function handelchange1(){
setCount(count - 1);
   }





    return(

        <>
        <h1>{tittle}</h1>
        <h3>{count}</h3>
        <button onClick={handelchange}>Click for the incress</button>

        <input type="number" placeholder="Enter Number here" id="number" />
         <button disabled={count === 0} onClick={handelchange1}>Click for the Decress</button>
         <button onClick={()=>setCount(0) } >Reset</button>
        </>

    )
}

export default ClickCounter;