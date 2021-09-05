import { useContext, useEffect, useRef, useState } from "react"
import MainComponent from "../../components/Main/Main"
import Song from "../../components/Song/Song";
import { SongContext } from "../../context/SongContext";
import { UserContext } from "../../context/UserContext";
import { fecthSongs } from "../../firebase/client";

const Home = () => {
    const {allSongs,setAllSongs,handlePlay} = useContext(SongContext)
    const {user} = useContext(UserContext)

    useEffect(()=>{
        let unuscribe;
        if(user) unuscribe = fecthSongs(setAllSongs)
        return () => unuscribe && unuscribe()
    },[user])


    return (
        <MainComponent title="MusicSH - Home">
            {allSongs && allSongs.map((song,id)=>(
                <>
                 <Song {...song} name={song.name.slice(0,song.name.lastIndexOf("."))} key={id} id={id} onPlay={handlePlay}/>
                </>
            ))}
        </MainComponent>
    )
}

export default Home
