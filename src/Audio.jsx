import React,{useState,useRef} from 'react'
import './Audio.css'
import audio1 from './assets/audio.opus'
function Audio(){
    const [audio ,setAudio]=useState(false)
    const audioset=useRef(null)
    const handlestart=()=>{
        audioset.current.play()
        setAudio(true)
    }
    const handlepause=()=>{
         audioset.current.pause()
         setAudio(false)
    }
    return(
        <>
        <div>
            <audio src={audio1} ref={audioset}></audio>
            <button className="button"onClick={audio? handlepause:handlestart}><h1 >{audio? '⏸️':'▶️'}</h1></button>
        </div>
        </>
    )
    
}
export default Audio