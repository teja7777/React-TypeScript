import React from 'react'
import { Todo } from "../../model"
type ToDos = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ArrayTpes = ({ todos, setTodos }: { todos: Todo[], 
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>> }) => {
  console.log(todos);
  let array = [1, 2, 3, 4, 5];
  console.log(array);
  /* array = ["@34","24"](It will not work because is by default inferred
   with number type) */
  let array1: number[] = [12, 23, 34];
  console.log(array1);

  let array2: number[] | string = [1, 2, 3];
  array2 = "24";
  console.log(array2);

  function printArray(arrayValues: (string | number)[]) {
    arrayValues?.map((val: string | number) => console.log(val));
  }


  let array3: (number | string)[] = [1, 2, 3, 4, 5, 6]
  array3 = ["Raj", "Teja", "Satish"]
  printArray(array3);


  return (
    <div></div>
  )
}

export default ArrayTpes
