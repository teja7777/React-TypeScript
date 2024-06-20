import React, { useState } from 'react'
import { Todo } from '../../model';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { Row, Col } from "react-bootstrap"
import "./styles.css"

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const CardsList: React.FC<Props> = ({ todos, setTodos }) => {


  const [isEdit, setIsEdit] = useState<number | null>(null);
  const [edittedValue, setEdittedValue] = useState<string>("");

  /*This function will be trigered for edit */
  const handleEdit = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, index: number) => {
    e.preventDefault();
    setIsEdit(index);
  }

  /*Handles input value change of input box */
  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdittedValue(e?.target?.value)
  }


  /*This handles delete functionality */
  const handleDelete = (singleTodo: Todo) => {
    setTodos(
      todos?.filter((todo) => todo.id !== singleTodo.id)
    );
  }

  /*This handles done functionality */
  const handleDone = (singleTodo: Todo) => {
    todos?.map((todo, index) => {
      if (todo.id === singleTodo.id) {
        setTodos([
          ...todos.slice(0, index),
          { ...todos[index], isDone: true },
          ...todos.slice(index)
        ])
      }
      return todos;
    })
  }

  /*This will be triggered when you click on enter */
  const handleSubmit = ((e: React.FormEvent<HTMLFormElement>, index: number) => {
    e.preventDefault();
    setEdittedValue(edittedValue);
    setTodos([...todos.slice(0, index),// Copy the first object as is
    { ...todos[index], todo: edittedValue }, // Update the second object's todo
    ...todos.slice(index + 1)]);// Copy the rest of the objects as is
    setIsEdit(null);
  })

  return (
    <Row style={{ width: "90%" }} >
      {todos?.map((singleTodo, index) => {
        return <Col md="6">
          <div className='d-flex single-card'>
            {isEdit === index ? <form onSubmit={(e) => { handleSubmit(e, index) }}>
              <input
                placeholder='Edit the To-do here'
                onChange={(e) => { handleTodoChange(e) }}
              />
            </form>
              :
              <span className='px-1' style={{ width: "70%" }}>{singleTodo?.todo}</span>}
            <div className='d-flex justify-content-end' style={{ width: "70%" }}>
              <span className='px-1 cursor-pointer' onClick={(e) => { handleEdit(e, index) }}><FaEdit /></span>
              <span className='px-1 cursor-pointer' onClick={() => { handleDelete(singleTodo) }}><MdDelete /></span>
              <span className='px-1 cursor-pointer' onClick={() => { handleDone(singleTodo) }}><MdDone /></span>
            </div>
          </div>
        </Col>
      })}
    </Row>
  )
}

export default CardsList;