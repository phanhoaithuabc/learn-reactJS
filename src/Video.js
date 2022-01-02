import { forwardRef, useImperativeHandle, useRef } from 'react'
import download from './video/download.mp4'

function Video(props, ref){
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        // chi export ra ngoai 2 method 
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))
    return (
        <video width={500} src={download} ref={videoRef}/>
    )
}

export default forwardRef(Video)