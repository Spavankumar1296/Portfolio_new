import { useState } from 'react'
import './App.css'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Navbar from './Components/NavBar/NavBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <About/>
        <Projects/>
    </>
  )
}

export default App
