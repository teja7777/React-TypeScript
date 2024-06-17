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
  const handleEdit = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, index: number) => {
    e.preventDefault();
    setIsEdit(index);
  }
  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdittedValue(e?.target?.value)
  }

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
      {todos?.map((val, index) => {
        return <Col md="6">
          <div className='d-flex single-card'>
            {isEdit === index ? <form onSubmit={(e) => { handleSubmit(e, index) }}>
              <input
                placeholder='Edit the To-do here'
                onChange={(e) => { handleTodoChange(e) }}
              />
            </form>
              :
              <span className='px-1' style={{ width: "70%" }}>{val?.todo}</span>}
            <div className='d-flex justify-content-end' style={{ width: "70%" }}>
              <span className='px-1 cursor-pointer' onClick={(e) => { handleEdit(e, index) }}><FaEdit /></span>
              <span className='px-1 cursor-pointer'><MdDelete /></span>
              <span className='px-1 cursor-pointer'><MdDone /></span>
            </div>
          </div>
        </Col>
      })}
    </Row>
  )
}

export default CardsList;