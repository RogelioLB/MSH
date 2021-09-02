import { faHome, faPlusCircle, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useRef} from 'react';

const BottomBar = ({className}) => {
    const home = useRef();
    const add = useRef();
    const profile = useRef();
    const router = useRouter()

    const handleClick = (ref) =>{
        home.current.classList.remove("selected");
        add.current.classList.remove("selected");
        profile.current.classList.remove("selected");
        ref.current.classList.add("selected");
    }

    useEffect(()=>{
        if(router.route === "/home") handleClick(home)
        else if(router.route === "/compose/song") handleClick(add)
        else if(router.route === "/profile") handleClick(profile)
    },[router.route])
    return (
        <nav className={className}>
            <Link href="/home">
                <a onClick={()=>handleClick(home)}ref={home}><div className="icon"><FontAwesomeIcon icon={faHome}/></div></a>
            </Link>
            <Link href="/compose/song">
                <a onClick={()=>handleClick(add)}ref={add}><div className="icon"><FontAwesomeIcon icon={faPlusCircle}/></div></a>
            </Link>
            <Link href="/profile">
                <a onClick={()=>handleClick(profile)}ref={profile}><div className="icon"><FontAwesomeIcon icon={faUserAlt}/></div></a>
            </Link>
        </nav>
    )
}

export default BottomBar
