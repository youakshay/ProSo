import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { AboutContent } from './Components/AboutContent'
import { Education } from './Components/Education'

function App() {

  return (
    <>
      <div className='h-dvh w-dvh  bg-black p-2 flex flex-col content-center overflow-hidden'>
          <Navbar />
          <AboutContent />
      </div>
      <div className='h-dvh w-dvh bg-white'>
        <Education />
      </div>
      <div className='h-dvh w-dvh bg-slate-200'>

      </div>
      <div className='h-72 w-dvh bg-black'>

      </div>
    </>
  )
}

export default App
