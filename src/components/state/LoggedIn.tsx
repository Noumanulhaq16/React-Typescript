import { useState } from "react"

export const LoggedIn = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const HandleLogIn = () => {
        setisLoggedIn(true)
    }
    const HandleLogOut = () => {
        setisLoggedIn(false)
    }
    return (
        <div>
            <button onClick={HandleLogIn}>Login</button>
            <button onClick={HandleLogOut}>Logout</button>
            <div>User is {isLoggedIn ? 'Log In' : 'Log Out'}</div>
        </div>
    )
}