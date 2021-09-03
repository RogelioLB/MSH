import { createContext, useEffect, useRef, useState } from "react";

export const SongContext = createContext()

const SongContextProvider = ({children}) =>{
    const [allSongs,setAllSongs] = useState(null);
    const [selectedSong,setSelectedSong] = useState(null);
    const [id,setId] = useState(null);
    const audio = useRef();

    const handlePlay = async(id) =>{
        setId(id)
        await setSelectedSong(allSongs[id].content)
        await audio.current.play()
    }
    
    const handleEnded = async() =>{
        await setSelectedSong(id === allSongs.length - 1 ? allSongs[0].content : allSongs[id + 1].content)
        await setId(id === allSongs.length - 1 ? 0 : id+1)
        await audio.current.play();
    }
    return(
        <SongContext.Provider value={{allSongs,setAllSongs,handlePlay}}>
            {children}
            <audio src={selectedSong} ref={audio} onEnded={handleEnded} id={id}/>
        </SongContext.Provider>
    )
}

export default SongContextProvider