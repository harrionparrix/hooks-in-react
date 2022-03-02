import React,{useState} from 'react';

const UseReducer=()=>{
    const[counter,setCounter]=useState(0);
    const[stext,setText]=useState(true);
return(
    <>
     <div>UseReducer</div>
     <div>
         <h1>{counter}</h1>
        <button onClick={()=>{
            setCounter(counter+1);
            setText(!stext);
        }}
        > Click me!</button>
   
    {stext && <p>This is a text</p>}
    </div>

    </>

)
};

export default UseReducer;

