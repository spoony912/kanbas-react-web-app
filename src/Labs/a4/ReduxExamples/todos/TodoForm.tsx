import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { LabState } from "../../../store";

function TodoForm() {
  const { todo } = useSelector((state: LabState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <button className="btn btn-primary" onClick={() => dispatch(addTodo(todo))}> Add </button> &nbsp;
      <button className="btn btn-success" onClick={() => dispatch(updateTodo(todo))}>  Update </button>
      &nbsp;
      <input
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
    </li>
  );
}
export default TodoForm;