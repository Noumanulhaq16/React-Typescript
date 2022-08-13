type RandomNumberType = {
    value: Number
}

type PositiveNumber = RandomNumberType & {
    isPositive: Boolean
    isNegitive?: never
    isZero?: never
}

type NegitiveNumber = RandomNumberType & {
    isPositive?: never
    isNegitive: Boolean
    isZero?: never
}

type ZeroNumber = RandomNumberType & {
    isPositive?: never
    isNegitive?: never
    isZero: Boolean
}

type RandomNumberProps = PositiveNumber | NegitiveNumber | ZeroNumber

export const RandomNumber = ({ value, isPositive, isNegitive, isZero }: RandomNumberProps) => {
    return (
        <>
            {value}{isPositive && 'Positive'}{isNegitive && 'Nagitive'}{isZero && 'Zero'}
        </>
    )
}