import { useEffect, useRef, useState } from 'react'
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa6'

import './App.css'

function App() {
  // console.log(window.SpeechRecognition|| window.webkitSpeechRecognition)   --Check if browser supports or not--
  //store the user voice
  const[transcript , setTranscript] = useState('')
  const[isRecording, setIsRecording] = useState(false)
  const recogRef = useRef(null)
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  if(!recogRef.current){
    recogRef.current = new SpeechRecognition()
  }
  const recognition = recogRef.current
  useEffect(()=>{
      recognition.continuous = true
      recognition.interimResults = false
      recognition.lang = 'en-US'

      recognition.onstart=()=>{console.log('Voice is activated')}
      recognition.onaudiostart=()=>{console.log('Audio is activated')}
      recognition.onresult=(event)=>{
        const lastIndex = event.results.length - 1
        const text = event.results[lastIndex][0].transcript
        console.log(text)
        setTranscript(prev => prev + ' ' + text)
      }
      recognition.onaudioend=()=>{console.log('Audio is deactivated')}
      recognition.onend=()=>{console.log('Voice is deactivated')}

  }, [])


  return (
    <div className='flex flex-col'>
      <div className='bg-gray-900 text-white font-bold text-6xl p-5 text-center w-[50%] rounded-xl m-auto mt-10 hover:scale-105 duration-100 transition-all'>
        <FaMicrophone className='text-red-600 p-3 inline' />
        <button className='cursor-pointer' onClick={() => {recognition.start(), setIsRecording(true)}}>Start Recording</button>
      </div>
      <div className='bg-gray-900 text-white font-bold text-3xl p-5 text-center w-[50%] rounded-xl m-auto mt-10 hover:scale-105 duration-100 transition-all'>
        {transcript}
      </div> 
        <div className='bg-gray-900 text-white font-bold text-6xl p-5 text-center w-[50%] rounded-xl m-auto mt-10 hover:scale-105 duration-100 transition-all'>
        <FaMicrophoneSlash className='text-red-600 p-3 inline' />
          <button className='cursor-pointer' onClick={()=>{recognition.stop(), setIsRecording(false)}}>Stop Recording</button>
        </div>
    </div>
  )
}

export default App
