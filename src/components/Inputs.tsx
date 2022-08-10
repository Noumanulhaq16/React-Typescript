
type InputsProps = {
    value?: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Inputs = ({ value, handleChange }: InputsProps) => {
    return (
    <input type='text' value={value} onChange={handleChange} />
    )
}