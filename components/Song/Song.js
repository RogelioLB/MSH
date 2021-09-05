import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../Button/Button"

const Song = ({name,onPlay,id}) => {
    return (
        <div className="song-container" key={id}>
            <img src="/images/default.png" alt={name}/>
            <div className="song-title">
                <h2>{name}</h2>
            </div>
            <div className="song-play">
                <Button onClick={()=>onPlay(id)}><FontAwesomeIcon icon={faPlay}/></Button>
            </div>
            <style jsx>
                {`
                .song-container{
                    width:100%;
                    height:120px;
                    background:#ecf0f1;
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
                h2{
                    color:black;
                    font-size:clamp(12px,4vw,24px);
                    font-weight:400;
                }
                
                `}
            </style>
        </div>
    )
}

export default Song
