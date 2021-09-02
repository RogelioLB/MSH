import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Song = ({content,name,onPlay,id}) => {
    return (
        <div className="song-container">
            <img src="/images/default.png" alt={name}/>
            <div className="song-title">
                <h2>{name.slice(0,name.lastIndexOf("."))}</h2>
            </div>
            <div className="song-play">
                <button onClick={()=>onPlay(id)}><FontAwesomeIcon icon={faPlay}/></button>
            </div>
            <style jsx>
                {`
                .song-container{
                    width:100%;
                    height:120px;
                    background:#636E72;
                    display:flex;
                    align-items:center;
                    padding:10px;
                }
                img{
                    width:100%;
                    max-width:120px;
                }
                @media (max-width:400px){
                    img{
                        max-width:85px;
                    }
                }
                .song-title{
                    height:100%;
                    padding:10px;
                    flex:1;
                }
                .song-play{
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                }

                .song-play button{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:45px;
                    width:45px;
                    cursor:pointer;
                    padding:15px 15px;
                    border:none;
                    border-radius:50%;
                    outline:none;
                    transition:background .1s;
                }
                .song-play button:hover{
                    background:#b2bec3;
                }
                h2{
                    color:white;
                    font-size:clamp(12px,4vw,24px);
                }
                
                `}
            </style>
        </div>
    )
}

export default Song
