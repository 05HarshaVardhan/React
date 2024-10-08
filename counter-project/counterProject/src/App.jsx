import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  const addValue = () => {
    counter += 1;
    setCounter(counter);
    console.log(counter);
  }

  const removeValue = () => {
    if(counter != 0){
      counter -= 1;
      setCounter(counter);
    }
    
    console.log(counter);
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
