import React, { SyntheticEvent, useState } from 'react';
import './App.css';
import InputFiled from './Components/InputFiled';
import { Todo } from './model';
import CardsList from './Components/CardsList.tsx';
import Stringtype from './Components/PracticingTypes/Stringtype';
import NumberType from './Components/PracticingTypes/NumberType';
import ArrayTpes from './Components/PracticingTypes/ArrayTpes';
import ArrayTypesPractice from './Components/PracticingTypes/ArrayTypesPractice';
import ObjectTypesPractice from './Components/PracticingTypes/ObjectTypesPractice';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  /*Just for practice purpose */
  const [arrayPractice, setArrayPractice] = useState<{ label: string, value: string }[]>([
    { label: "TestObject", value: "TestObject" },
    { label: "TestObject", value: "TestObject" },
    { label: "TestObject", value: "TestObject" },
    { label: "TestObject", value: "TestObject" }
  ]);

  /*Just for object type practice */
  const [objectPractice, setObjectPractice] = useState(
    { name: "Teja", id: 25, salary: "200000000" }
  )


  const handleAdd = (e: SyntheticEvent) => {
    e.preventDefault();
    // inputRef.current.focus();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo(" ");
    }
  }

  return (
    <div className="App">
      <span className='heading'>TASKIFY </span>
      <InputFiled todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <CardsList todos={todos} setTodos={setTodos} />
      {/* <Stringtype /> */}
      {/* <NumberType /> */}
      {/* <ArrayTpes todos={todos} setTodos={setTodos} /> */}
      {/* <ArrayTypesPractice arrayPractice={arrayPractice}
        setArrayPractice={setArrayPractice} /> */}
      <ObjectTypesPractice objectPractice={objectPractice}
        setObjectPractice={setObjectPractice}
      />
    </div>
  );
}

export default App;
