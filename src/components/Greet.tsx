type GreetProps = {
    name: string
    message: number
    isLoggedIn?: boolean
}

export const Greet = (props: GreetProps) => {
    const {isLoggedIn = true } = props
    return (
        <>
            {
               isLoggedIn && <h2>Welcome {props.name}! You Have  {props.message} unread message</h2>
            }
        </>
    )
}