import React,{useState,useRef} from 'react'
import './Audio.css'
import audio2 from './assets/audio2.mp3'
function Audio1(){
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
            <audio src={audio2} ref={audioset}></audio>
            <button className="button"onClick={audio? handlepause:handlestart}><h1 >{audio? '⏸️':'▶️'}</h1></button>
        </div>
        </>
    )
    
}
export default Audio1