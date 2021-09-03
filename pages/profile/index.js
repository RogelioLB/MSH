import React from 'react'
import Avatar from '../../components/Avatar/Avatar'
import MainComponent from '../../components/Main/Main'
import { signOut } from '../../firebase/client'

const Profile = () => {
    return (
        <MainComponent>
            <Avatar />
            <button onClick={signOut}>Salir</button>
        </MainComponent>
    )
}

export default Profile
