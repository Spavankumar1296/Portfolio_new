import { useState } from 'react'
import './App.css'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Navbar from './Components/NavBar/NavBar'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)


  return (
    <main>
        <Navbar/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </main>
  )
}

export default App
