import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const Avatar = () => {
    const {user} = useContext(UserContext)
    return (
        <div>
            {user && <img src={user.photoURL} />}
        </div>
    )
}

export default Avatar
