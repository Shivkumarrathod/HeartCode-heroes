import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect, useState } from "react";
import { FaMicrophone } from "react-icons/fa6";

const Talk = () => {
  const [onMic,setOnMic] = useState(false)
  const [translateSpeech,setTrandlateSpeech] = useState('')
  
  const {transcript,browserSupportsSpeechRecognition} = useSpeechRecognition()
  const startlistening=()=>SpeechRecognition.startListening({ continuous: true,language:'en-IN' })

  useEffect(() => {
    console.log(transcript)
  }, [transcript])
  

  if(!browserSupportsSpeechRecognition){
    return null
  }
  return (
    <div>
      <div className='h-[10rem] text-pink-600'>{transcript}</div>
      <button onClick={startlistening} className='bg-pink-500 m-5'>start listening</button>
      <button onClick={()=>{SpeechRecognition.stopListening;}} className='bg-pink-500 m-5'>start listening</button>
      <button onClick={startlistening} className='bg-pink-500 m-5'>start listening</button>
    </div>
  )
}

export default Talk

