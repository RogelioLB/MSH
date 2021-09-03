import { useRouter } from "next/router";
import { createContext, useEffect, useRef, useState } from "react";

export const SongContext = createContext()

const SongContextProvider = ({children}) =>{
    const [allSongs,setAllSongs] = useState(null);
    const [selectedSong,setSelectedSong] = useState(null);
    const [id,setId] = useState(null);
    const router = useRouter();
    const audio = useRef();

    useEffect(()=>{
        if(router.route === "/"){
            audio.current.pause();
            audio.current.currentTime = 0;
        }
    },[router.route])

    const handlePlay = async(id) =>{
        setId(id)
        await setSelectedSong(allSongs[id])
        await audio.current.play()
    }
    
    const handleEnded = async() =>{
        await setSelectedSong(id === allSongs.length - 1 ? allSongs[0] : allSongs[id + 1])
        await setId(id === allSongs.length - 1 ? 0 : id+1)
        await audio.current.play();
    }
    return(
        <SongContext.Provider value={{allSongs,setAllSongs,handlePlay}}>
            {children}
            <audio src={selectedSong?.content} ref={audio} onEnded={handleEnded} id={id} title={selectedSong?.name}/>
        </SongContext.Provider>
    )
}

export default SongContextProvider