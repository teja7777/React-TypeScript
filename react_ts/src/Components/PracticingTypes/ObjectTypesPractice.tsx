
import React from 'react'

type RequiredProps = {
  objectPractice: {
    name: string, id: number, salary: string
  },
  setObjectPractice: React.Dispatch<React.SetStateAction<{
    name: string;
    id: number;
    salary: string;
  }>>
}

function ObjectTypesPractice({ objectPractice, setObjectPractice }: RequiredProps) {
  return (
    <div>{Object.keys(objectPractice)?.map((val) => {
      return <p>{val?.toUpperCase() + " " + objectPractice["name"]}</p>
    })}</div>
  )
}

export default ObjectTypesPractice