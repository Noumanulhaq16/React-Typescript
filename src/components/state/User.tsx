import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const LoggedIn = () => {
    const [User, setUser] = useState<AuthUser | null>(null)
    const HandleLogIn = () => {
        setUser({
            name: 'Vishawas',
            email: 'abc@gmail.com'
        })
    }
    const HandleLogOut = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={HandleLogIn}>Login</button>
            <button onClick={HandleLogOut}>Logout</button>
            <div>User Name is {User?.name}</div>
            <div>User Email is {User?.email}</div>
        </div>
    )
}