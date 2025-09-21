import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  let addCount = () => {
    if (count >= 0 && count < 20) {
      count++;
      setCount(count)
    }
  }

  let removeCount = () => {
    if (count > 0 && count <= 20) {
      count--;
      setCount(count)
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <br />
      <h2>Counter - {count}</h2>
      <button onClick={addCount} >Add</button>
      <br /><br />
      <button onClick={removeCount}>sub</button>
    </>
  )
}

export default App
