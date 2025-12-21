import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FloatingGeometricShapes from './components/FloatingGeometricShapes'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Hobbies from './components/Hobbies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FloatingGeometricShapes/>    
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills />
      <Resume />
      <Hobbies />
    </>
  )
}

export default App
