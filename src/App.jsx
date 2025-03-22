import { useState } from 'react'
import './App.css'
import About from './Components/About/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <About/>
    </>
  )
}

export default App
