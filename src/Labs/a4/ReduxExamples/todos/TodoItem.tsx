import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import TodoForm from "./TodoForm";
import { TodoType } from "../../../store";
 // Import the 'Todo' type

function TodoItem({todo}:{todo: TodoType}) { 
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item">
            <button className="btn btn-danger" onClick={() => dispatch(deleteTodo(todo.id))}> Delete  </button> &nbsp;
            <button className="btn btn-warning" onClick={() => dispatch(setTodo(todo))}> Edit </button>
            &nbsp;
            {todo.title}
        </li>
    );
}
export default TodoItem;