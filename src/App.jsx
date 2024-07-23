import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Components/Navbar'
import { AboutContent } from './Components/AboutContent'

function App() {

  return (
    <>
      <div className='h-dvh w-dvh bg-black p-2 flex flex-col content-center overflow-hidden'>
          <Navbar />
          <AboutContent />
      </div>
      <div className='h-dvh w-dvh bg-green-200'>

      </div>
      <div className='h-72 w-screen bg-black'>

      </div>
    </>
  )
}

export default App
