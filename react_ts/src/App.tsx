import React, { SyntheticEvent, useState } from 'react';
import './App.css';
import InputFiled from './Components/InputFiled';
import { Todo } from './model';
import CardsList from './Components/CardsList.tsx';
import Stringtype from './Components/PracticingTypes/Stringtype';
import NumberType from './Components/PracticingTypes/NumberType';
import ArrayTpes from './Components/PracticingTypes/ArrayTpes';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);


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
      <ArrayTpes todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
