import { useReducer } from "react"

const initialState = { count: 0 }
type CounterTyoe = {
    count: number
}
type UpdateAction = {
    type: 'inc' | 'dec'
    payload: number
}
type ResetAction = {
    type: 'reset'
}
type CounterAction = UpdateAction | ResetAction


function reducer(state: CounterTyoe, action: CounterAction) {
    switch (action.type) {
        case 'inc':
            return { count: state.count + action.payload }
        case 'dec':
            return {
                count: state.count - action.payload
            }
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            count:{state.count}
            <button onClick={() => dispatch({ type: 'inc', payload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({ type: 'dec', payload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Increment 10</button>
        </>
    )
}