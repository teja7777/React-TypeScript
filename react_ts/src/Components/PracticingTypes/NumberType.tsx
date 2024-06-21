import React, { useEffect, useRef, useState } from 'react'

const NumberType = () => {
  let num1: number = 1;
  // console.log(num1.toUpperCase())
  console.log(num1 > 10);
  // num1 = "Hai"

  const printNumber = (num: number): number => {
    return num
  }

  let num2 = printNumber(num1);
  console.log(num2)
  // printNumber("teja");

  const [number1, setNumber1] = useState(1);
  const number2 = useRef<string | number | boolean>(23);
  useEffect(() => {
    setNumber1(25);
  }, [])


  return (
    <div>{number1}</div>
  )
}

export default NumberType