import { createContext } from "react";
import useAudio from '../hooks/useAudio'
export const SongContext = createContext()

const SongContextProvider = ({children}) =>{
    const {allSongs,selectedSong,setAllSongs,state,currentTime,duration,Skip,Stop,Pause,Play,handleEnded,handlePlay,handleLoaded,handlePlaying,Resume,audio,id} = useAudio()

    return(
        <SongContext.Provider value={{allSongs,setAllSongs,handlePlay,Skip,Pause,Play,Stop,Resume,currentTime,state,duration,selectedSong}}>
            {children}
            <audio src={selectedSong?.content} ref={audio} onEnded={handleEnded} id={id} title={selectedSong?.name} onTimeUpdate={handlePlaying} onLoadedMetadata={handleLoaded}/>
        </SongContext.Provider> 
    )
}

export default SongContextProvider