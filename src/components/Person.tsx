import { PersonProps } from "./Person.types"

export const Person = (props: PersonProps) => {
    return (
        <>{props.name.firstName}{props.name.lastName}</>
    )
}