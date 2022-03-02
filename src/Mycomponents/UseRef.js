import React,{useRef,useState} from 'react'

function UseRef() {
    const inputref=useRef(null);
    const clicked=()=>{
        console.log(inputref.current.value);
        inputref.current.focus();
    }

  return (<>
  <div>Use Ref</div>
  <h1>Heading</h1>
  <input placeholder='Enter..' ref={inputref}>
  </input>
  <button onClick={clicked}>click here</button>  
  </>
    
  )
}

export default UseRef