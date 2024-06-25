
import React from 'react'
interface objectTye {
    label: string;
    value: string;
}
type Props = {
    arrayPractice: objectTye[],
    setArrayPractice: React.Dispatch<React.SetStateAction<{
        label: string;
        value: string;
    }[]>>
}
const ArrayTypesPractice: React.FC<Props> = ({ arrayPractice, setArrayPractice }) => {
    return (
        <div>{arrayPractice.map((singleArray) => {
            return <p>{singleArray?.label?.toUpperCase()}</p>
        })}</div>
    )
}

export default ArrayTypesPractice