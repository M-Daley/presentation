import { useState, useRef, useEffect } from 'react'
import Slider from './Slider'
import AudioControlPanel from './AudioControlPanel'

export default function Audio({ song }) {
    const [percentage, setPercentage]   = useState(0)
    const [isPlaying, setIsPlaying]     = useState(false)
    const [duration, setDuration]       = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const audioRef = useRef()

    const onChange = (e) => {
        const audio = audioRef.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
    }

    const play = () => {
        const audio = audioRef.current
        audio.volume = 1.0

        if (!isPlaying) {
            setIsPlaying(true)
            audio.play()
        }

        if (isPlaying) {
            setIsPlaying(false)
            audio.pause()
        }
    }

    const getCurrentDuration = (e) => {
        const percent   = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time      = e.currentTarget.currentTime
        
        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))
    }

    useEffect(() => {
        if (percentage == 100) {
            setIsPlaying(false)
        }
    }, [percentage])

return (
    <div className="audio-tag">
        <Slider 
            percentage={percentage}
            onChange={onChange}    
        />
        <audio
            ref={audioRef}
            onTimeUpdate={getCurrentDuration}
            onLoadedData={(e) => {
                setDuration(e.currentTarget.duration.toFixed(2))
            }}
        >
            <source src={song}/>
        </audio>
        <AudioControlPanel 
            play={play}
            isPlaying={isPlaying}
            duration={duration}
            currentTime={currentTime}
        />
    </div>
)}