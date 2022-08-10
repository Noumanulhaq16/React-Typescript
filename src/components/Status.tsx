type StatusProps = {
    status: 'loading' | 'success' | 'error'
}
export const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading') {
        message = 'Loading ...'
    } else if (props.status === 'success') {
        message = 'Data Fetch SuccessFully'
    } else if (props.status === 'error') {
        message = 'Error Fetching Data'
    }
    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}

