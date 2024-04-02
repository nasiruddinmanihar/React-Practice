import { useState } from 'react';
import './App.css'

function App() {

  let [count, setCounter]=useState(0)
  // let count=16;

  const addValue=()=>{
    console.log("clicked", count);
    if (count<20){
     
      count=count+1;
    setCounter(count)

    }
  
    
  }
  
  const removeValue=()=>{
    console.log("clicked", count);
    if(count>0){
      setCounter(count-1)
    }
    
  }

  return (
    <>
      <h1>Counter button </h1>
      <h1>count {count}</h1>
      <button onClick={addValue}> Add value {count}</button>
      <br></br>
      <button onClick={removeValue}> Remove Value {count}</button>
      <p>footer : {count}</p>
     
     
    </>
  )
}

export default App
