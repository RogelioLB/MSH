import Login from '../Login/Login.module.css'

const FormButton = ({icon,onClick}) => {
    return (
        <button className={Login.form_btn} onClick={onClick}>
            Inicia sesion con {icon}
        </button>
    )
}

export default FormButton
