import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { AboutContent } from './Components/AboutContent'
import { Education } from './Components/Education'
import { Experience } from './Components/Experience'

function App() {

  return (
    <>
      <div className='h-dvh w-dvh  bg-black flex flex-col content-center overflow-hidden'>
          <Navbar />
          <AboutContent />
      </div>
      <div className='h-dvh w-dvh bg-[rgb(22,22,22)]'>
        <Education />
      </div>
      <div className='h-dvh w-dvh bg-[rgb(22,22,22)]'>
        <Experience />
      </div>
      <div className='h-72 w-dvh bg-black'>

      </div>
    </>
  )
}

export default App
