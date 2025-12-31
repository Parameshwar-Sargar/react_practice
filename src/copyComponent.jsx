import React from "react";

import { useState } from "react";

function copyComponent(){
    const [copyName , setcopyName]  = useState ("");

      
       
const handleCopy =()=>{
    navigator.clipboard.writeText(copyName);
    alert("Copied the text: " + copyName);
}
     

       
    return(
    <div>
        <h1>this is the copy component</h1>

         <h1> Copy name</h1>   
         <input type="text" placeholder="Enter Name here" value={copyName}  onChange={(e)=>setcopyName(e.target.value)}/> 
         <button onClick={handleCopy}>Copy Name</button>
         
    </div>

    
        )
         }




         export default copyComponent();