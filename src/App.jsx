import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//   App -> Component,	It's a function that returns UI
function App() {

  // counter ->	State,	It's data that App component remembers.
  let [counter, setCounter] = useState(0)
  // let counter = 0
  const addValue = () => {
    setCounter(counter + 1)
    // setCounter ->	Function to change the state	Helps to update counter safely.
  }





  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
    <h1> O2_counter_react</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}>Add Value{counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
