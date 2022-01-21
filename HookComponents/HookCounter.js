// Handling state update using Function - increment and decrement 

import React,{useState} from 'react'

function HookCounter() {
    const initial=0
    const incVal=1
    const [counter,setCounter]=useState(initial)

 const addFive=()=>{
   for(let i=0; i<5;i++){
     setCounter(counter+incVal)
   // setCounter(prevCounter=>prevCounter+incVal)
   }
}
    return (
        <div>
         <button onClick={()=>setCounter(counter+incVal)} > Add </button>
          ..  ..  
          <button onClick={addFive} > Add Five </button>
          
       {console.log("HooKReturnlog..counter is ",counter)}


       Function counter is {counter}  .... 
 
               </div>
   )
}

export default HookCounter
