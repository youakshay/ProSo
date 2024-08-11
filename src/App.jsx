import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { AboutContent } from './Components/AboutContent'
import { Education } from './Components/Education'
import { Experience } from './Components/Experience'
import { Footer } from './Components/Footer'

function App() {

  return (
    <>
      <div className='h-dvh w-dvh  bg-black flex flex-col content-center overflow-hidden' id='about'>
          <Navbar />
          <AboutContent />
      </div>
      <div className='h-dvh w-dvh bg-[rgb(22,22,22)]' id='education'>
        <Education />
      </div>
      <div className='h-dvh w-dvh bg-[rgb(22,22,22)]' id='experience'>
        <Experience />
      </div>
      <div className='h-72 w-dvh bg-black' id='contacts'>
        <Footer />
      </div>
    </>
  )
}

export default App
