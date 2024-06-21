import React from 'react'

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

  return (
    <div></div>
  )
}

export default NumberType