import React,{useState} from 'react';

const Hookusestate=()=> {
  const [counter,setCounter]=useState(0);
  const [inputvalue,setText]=useState("Heylw");
  // const[variable,setvariable] or const [data,setData] = useState()
const increament=()=>{
    setCounter(counter+1);
  }
const textfunc=(event)=>{
  const newvalue = event.target.value
  setText(newvalue)
}
  return (
  <>
  <div>
    <button onClick={increament}>Click me </button>
    {counter}</div>
    <div>
      <input onChange={textfunc} placeholder='Enter ..'/>{inputvalue}
    </div>
    </>
  )
};
export default Hookusestate;