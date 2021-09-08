import { faForward, faMusic, faPause, faPlay, faStop, faVolumeDown, faVolumeOff, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { SongContext } from '../../context/SongContext';
import Button from '../Button/Button';
import Audio from "./Audio.module.css";

const HeadBar = ({className}) => {
    const {Skip,Resume,Pause,Stop,volume,currentTime,duration,state,selectedSong,handleChange} = useContext(SongContext)

    
    return (
        <>
            <header className={className}>
                <h1><FontAwesomeIcon icon={faMusic}/>SH</h1>
            </header>
            <div className={Audio.container} >
                <div className={Audio.btn_container}>
                    {
                        !state ? <Button onClick={Resume}><FontAwesomeIcon icon={faPlay}/></Button> : <Button onClick={Pause}><FontAwesomeIcon icon={faPause}/></Button>
                    }
                    <Button onClick={Stop}><FontAwesomeIcon icon={faStop}/></Button>
                    <Button onClick={Skip}><FontAwesomeIcon icon={faForward}/></Button>
                </div>
                {
                    currentTime && duration && selectedSong && (
                        <div className={Audio.container}>
                            <h3 className={Audio.txt}>{currentTime?.minutes}:{currentTime?.parsedSeconds} - {duration?.minutes}:{duration?.parsedSeconds}</h3>
                            <h3 className={Audio.txt}>{selectedSong?.name.slice(0,selectedSong.name.lastIndexOf("."))}</h3>
                            <h3 className={Audio.txt}><FontAwesomeIcon icon={volume < .5 ? faVolumeDown : faVolumeUp }/><input className={Audio.range} type="range" value={volume} onChange={handleChange} min="0" max="1" step=".01"/></h3>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default HeadBar
