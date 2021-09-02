import { createContext, useEffect } from "react";
import useUser from "../hooks/useUser";
import Router, { useRouter } from 'next/router'

export const UserContext = createContext()

const UserContextProvider = ({children}) =>{
    const {user} = useUser()
    const router = useRouter()

    useEffect(() => {
        user && router.route === "/" && Router.replace("/home")
    }, [user])

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;