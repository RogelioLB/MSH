import { loginWithGithub, loginWithGoogle } from '../../firebase/client'
import Login from './Login.module.css'
import { useContext } from 'react'
import FormButton from '../Button/FormButton'
import Loading from '../Loading/Loading'
import { UserContext } from '../../context/UserContext'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const LoginForm = () => {
    const {user} = useContext(UserContext)
    const handleGithub = async(e) =>{
        e.preventDefault()
        await loginWithGithub()
    }

    const handleGoogle = async(e) =>{
        e.preventDefault();
        await loginWithGoogle()
    }


    return (
        <div className={Login.grid_center}>
            <form className={Login.form_login}>
                <div className={Login.form_top}>
                    <img src="/images/default.png" className={Login.form_img}/>
                    <h1>Listen some music.</h1>
                </div>
                <div className={Login.form_text}>
                    <h2>And share it with your friends.</h2>
                </div>
                <div className={Login.form_btn_container}>
                    {
                        user === null && (
                            <>
                                <FormButton onClick={handleGithub} icon={<FontAwesomeIcon icon={faGithub}/>}/>
                                <FormButton onClick={handleGoogle} icon={<FontAwesomeIcon icon={faGoogle} />}/>
                            </>
                        ) 
                        
                    }
                    {
                        user === undefined && (
                            <Loading />
                        )
                    }
                </div>
            </form>
        </div>
    )
}
