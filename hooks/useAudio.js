import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import {secondToMin} from '../utils/secondsToMin'

export default function useAudio(){
    const [allSongs,setAllSongs] = useState(null);
    const [selectedSong,setSelectedSong] = useState(null);
    const [id,setId] = useState(null);
    const [currentTime,setCurrentTime] = useState(null); 
    const [state,setState] = useState(null);
    const [duration,setDuration] = useState(null);
    const router = useRouter();
    const audio = useRef();

    const Play = async() =>{
        await audio.current.load();
        await audio.current.play()
    }

    const Skip = async() =>{
        await setSelectedSong(id === allSongs.length - 1 ? allSongs[0] : allSongs[id + 1]);
        await setId(id === allSongs.length - 1 ? 0 : id+1);
    }

    const Pause = async() =>{
        setCurrentTime(audio.current.currentTime);
        await audio.current.pause();
    }

    const Stop = async() =>{
        await audio.current.pause();
        audio.current.currentTime = 0;
    }

    const Resume = async() =>{
        await audio.current.play();
    }

    useEffect(()=>{
        if(router.route === "/"){
            Stop()
        }
    },[router.route])

    const handlePlay = async(id) =>{
        await setSelectedSong(allSongs[id])
        setId(id)
    }
    
    const handleEnded = async() =>{
        await Skip();
    }

    const handlePlaying = (e) =>{
        setState(!e.target.paused);
        setCurrentTime(secondToMin(audio.current.currentTime))
    }

    const handleLoaded = () =>{
        setDuration(secondToMin(audio.current.duration))
    }

    useEffect(()=>{
        if(id) Play(id)
    },[id])
    return {state,allSongs,selectedSong,router,audio,id,currentTime,duration,setAllSongs,Resume,Skip,Play,Stop,handleLoaded,handlePlaying,handlePlay,handleEnded,Pause}
}