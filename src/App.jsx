import { useState } from 'react'
import { FaMicrophone } from 'react-icons/fa6'

import './App.css'

function App() {
   
  // console.log(window.SpeechRecognition|| window.webkitSpeechRecognition)   --Check if browser supports or not--
  const recognition = new SpeechRecognition()


  return (
    <div>
      <div className='bg-gray-900 text-white font-bold text-6xl p-5 text-center w-[50%] rounded-xl m-auto mt-10 hover:scale-105 duration-100 transition-all'>
        <FaMicrophone className='text-red-600 p-3 inline'/>
        <button className='cursor-pointer' onClick={()=>recognition.start()}>Start Recording</button>
      </div>
    </div>
  )
}

export default App
