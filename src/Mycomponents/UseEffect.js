import React,{useEffect,useState} from 'react'
import axios from 'axios'
function UseEffect() {
  const [counter,setCounter]=useState(0);
  const [data,setData] = useState("")


  useEffect(()=>{
    axios.get("http://jsonplaceholder.typicode.com/comments").then((response)=>{
      setData(response.data[0].email);
      console.log("aPI WAS CALLED");
    },)
  },[counter])

  return (
      <>
    <div>Use Effect</div>
    <div>
      {data}
    </div>
    <div>
      {counter}
       <button onClick={()=>{
            setCounter(counter+1);
       }}>Click Me</button>
    </div>
    </>
  )
}

export default UseEffect