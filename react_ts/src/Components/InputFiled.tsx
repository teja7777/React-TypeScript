import React, { SyntheticEvent, useRef } from 'react'
import "./styles.css"

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: SyntheticEvent) => void;
}
const InputFiled: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e)=>{
      handleAdd(e)
      inputRef.current?.blur();
    }}>
      <input ref={inputRef} type='input' value={todo} onChange={(e) => { setTodo(e.target.value) }} placeholder='enter to do' className='input__box' />
      <button className='input_button' type='submit'>GO</button>
    </form>
  )
}

export default InputFiled
