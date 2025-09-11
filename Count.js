import React, { useState } from 'react';
 
 function Count() {
    let [count , setCount] = useState(0);

    function updateCount(){
        setCount(count+1);
        
        console.log("count is", count);
    }
    function DecrementCount(){
        setCount(count-1);
        console.log("count is", count);
    }
   return (
     <div>
        <p>The value of count is : {count}</p>
        <button onClick = {updateCount}>Increment</button>
        <button onClick = {DecrementCount}>Decrease</button>
     </div>
   )
 }
 
 export default Count;