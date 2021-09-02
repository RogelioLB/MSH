import { createContext, useEffect, useRef, useState } from "react";

export const SongContext = createContext()

const SongContextProvider = ({children}) =>{
    const [allSongs,setAllSongs] = useState(null);
    const [selectedSong,setSelectedSong] = useState(null);
    const audio = useRef();

    const handlePlay = async(id) =>{
        await setSelectedSong(allSongs[id].content)
        await audio.current.play()
    }
    
    return(
        <SongContext.Provider value={{allSongs,setAllSongs,handlePlay}}>
            {children}
            <audio src={selectedSong} ref={audio}/>
        </SongContext.Provider>
    )
}

export default SongContextProvider