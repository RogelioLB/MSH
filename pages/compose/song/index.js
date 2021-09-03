import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../../../components/Container";
import media from 'jsmediatags/dist/jsmediatags.min.js'
import { saveSong, uploadFile } from "../../../firebase/client";

const STATES = {
    NONE:0,
    DRAG:1,
    DROP:2
}

const Add = () => {
    const [file,setFile] = useState(null);
    const [stateDrag,setStateDrag] = useState(STATES.NONE)
    const [progress,setProgress] = useState(null);
    const [task,setTask] = useState(null);

    useEffect(()=>{
        try{
            media.read(file,{
                onSuccess:(tags)=>{
                    console.log(tags)
                }
            })
        }catch(err){

        }
        if (task) {
            const onProgress = (snapshot) => {
                const info = snapshot["_delegate"]
                setProgress(info.bytesTransferred/info.totalBytes * 100)
            }
            const onError = (err) => {console.log(err)}
            const onComplete = () => {
              task.snapshot.ref.getDownloadURL().then(async res=>{
                  console.log("A")
                  await saveSong({content:res,name:file.name})
              })
            }
      
            task.on("state_changed",onProgress, onError, onComplete)
        }
    },[task,file]);

    const handleChange = async(e) =>{
        if(!e.target.files[0]) return;
        setFile(e.target.files[0]);
        const task = uploadFile(e.target.files[0]);
        setTask(task)
    }

    const handleDragEnter = (e) =>{
        e.preventDefault();
        setStateDrag(STATES.DRAG)
    }

    const handleDragOver = (e) =>{
        e.preventDefault()
    }

    const handleDragLeave = (e) =>{
        e.preventDefault();
        setStateDrag(STATES.NONE)
    }

    const handleDrop = async(e) =>{
        e.stopPropagation();
        e.preventDefault();
        const {files} = e.dataTransfer;
        const file = files[0];
        if(!file.type.includes("audio")) return alert("A")
        setFile(file)
        setStateDrag(STATES.DROP);
        const task = uploadFile(file)
        setTask(task)
    }

    return (
        <Container title="Añadir canción">
            <header>
                <Link href="/home">
                    <a className="back"><FontAwesomeIcon icon={faArrowLeft}/></a>
                </Link>
            </header>
            <main>
                <input type="file" accept="audio/*" id="song" onChange={handleChange}/>
                {
                    !progress ? <label className="btn" htmlFor="song" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDragEnter={handleDragEnter} onDropCapture={handleDrop} >Upload your file: </label>
                    :
                    <label className="bar">
                        <div></div>
                    </label>
                }
            </main>
            <style jsx>
                {`
                header{
                    width:100%;
                    background-color:white;
                    padding:10px 15px;
                }
                main{
                    height:calc(100% - 52px);
                    background-color:#ecf0f1;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
                input[type="file"]{
                    display:none;
                }

                label.btn{
                    display:block;
                    width:70%;
                    height:60px;
                    border-radius:42px;
                    display:flex;
                    justify-content:center;
                    font-weight:700;
                    font-size:clamp(20px,2vw,24px);
                    align-items:center;
                    color:white;
                    cursor:pointer;
                    background:rgba(9, 132, 227,1.0);
                    transition:background .2s;
                    border:${stateDrag === STATES.DRAG ? "3px dashed white" : "3px solid transparent"}
                }
                label.btn:hover{
                    background:rgba(116, 185, 255,1.0);
                }

                label.bar{
                    position:relative;
                    width:80%;
                    height:30px;
                    background-color:#b2bec3;
                    border-radius:40px;
                }
                label.bar div{
                    content:"";
                    position:absolute;
                    width:${progress+"%"};
                    height:100%;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                    border-radius:40px;
                    background-color:#0984e3;
                }
                `}
            </style>
        </Container>
    )
}

export default Add;
