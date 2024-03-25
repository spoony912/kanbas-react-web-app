import React, { useState,useEffect} from 'react';
import axios from 'axios';
import { deleteTodo } from '../a4/ReduxExamples/todos/todosReducer';
import { create } from 'domain';

function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(null);

    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState(
        {
            id: 1,
            title: "NodeJS Assignment",
            description: "Create a NodeJS server with ExpressJS",
            due: "2021-09-09",
            completed: false,
        }
    );

    const [todos, setTodos] = useState<any[]>([]);

    const postTodo = async() => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data] );
    };

    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };

    const createTodo = async() => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    }

    const removeTodo = async (todo:any) => {
        const response = await axios.get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    }

    const deleteTodo = async(todo:any) => {
        try {
            const response = await axios.delete(`${API}/$todo.id}`);
            setTodos(todos.filter( (t) => t.id !== todo.id));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    const updateTodo = async() => {
        try {
            const response = await axios.put(`${API}/{todo.id}`, todo);
            setTodos(todos.map( (t) => t.id === todo.id ? todo : t));
        } catch(error:any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }

    };

    const fetchTodoById = async (id:any) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    }

    const updateTitle = async() => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    }

    useEffect(() => {
        fetchTodos();
    }, []);


    return(
        <div>
            <h3>Working With Arrays</h3>
            
            <h4>Retrieving Arrays</h4>
            <a href = {API}>Get Todos</a>
            <br/>
            <br/>
            <h4>Retrieving an Item for an Array by ID</h4>
            <input type="number" value = {todo.id} 
                onChange = {(e) =>{
                    setTodo({
                        ...todo,
                        id: Number(e.target.value)
                    })}}/> &nbsp;
            <a className='btn btn-primary ' href = {`${API}/${todo.id}`}>Get Todo by ID</a>
            <br/>
            <br/>
            {/* has trouble, can not filter it  */}
            <h4>Filtering Array Items</h4>
            <a className="btn btn-primary me-2" href= {`${API}?completed=true` }>Get Completed Todos</a>
            
            <br/>
            <br/>
            <h4>Creating new Items in an Array</h4>
            <a className='btn btn-primary' href= {`${API}/create`}>Create Todo</a>

            <br/>
            <br/>
            <h4>Deleting from an Array</h4>
            <a className='btn btn-primary' href= {`${API}/${todo.id}/delete`}>Delete Todo with ID = {todo.id}</a>
            <br/>
            <br/>

            <h4>Updating an Item in an Array by using Title</h4>
            <input type = "text" value = {todo.title} onChange = {(e) =>{
                setTodo({
                    ...todo,
                    title: e.target.value
                })
            }}/> &nbsp;
            <a className="btn btn-primary" href = {`${API}/${todo.id}/title/${todo.title}`}>Update Title to {todo.title}</a>
            <br/>
            <br/>

            <h4>Updating an Item in an Array by using Description</h4>
            <input type = "text" value = {todo.description} onChange = {(e) =>{
                setTodo({
                    ...todo,
                    description: String(e.target.value)
                })
            }}/> &nbsp;
            <a className="btn btn-primary" href = {`${API}/${todo.id}/description/${todo.description}`}>Update Description to {todo.description}</a>
            <br/>
            <br/>

            <h4>Updating an Item in an Array by using Completed Property</h4>
            Completed or not: {todo.completed ? 'Yes':'No'} &nbsp;
            <input type = "checkbox" value = {todo.description} onChange = {(e) =>{
                setTodo({
                    ...todo,
                    completed: Boolean(e.target.value)
                })
            }}/> &nbsp;
            <a className="btn btn-primary" href = {`${API}/${todo.id}/completed/${todo.completed}`}>Update Completed</a>
            <br/>
            <br/>

            <h4>Working With Array by using Axios</h4>
            {errorMessage && (
                <div className = "alert alert-danger mb-2 mt-2">{errorMessage}</div>
            )}
            <input className ="mb-2 ms-2" value = {todo.id} readOnly></input>
            <br/>
            <input type="text" className ="mb-2 ms-2" value = {todo.title} onChange = { (e) => {
                setTodo({
                    ...todo,
                    title: e.target.value
                
                })
            }}></input>
            <br/>

            <textarea className ="mb-2 ms-2" value = {todo.description} onChange = { (e) => {
                setTodo({
                    ...todo,
                    description: e.target.value
                })
            }}/>
            <br/>
            <input value = {todo.due} type = "date" className ="mb-2 ms-2" onChange = { (e) => {
                setTodo( {
                    ...todo,
                    due: e.target.value
                })
            }}/>
            <br/>
            <label>
                <input checked = {todo.completed} type = "checkbox" className = "mb-2 ms-2" onChange = { (e) => {
                    setTodo( {
                        ...todo,
                        completed: e.target.checked
                    })
                }}></input> Completed
            </label>
            <br/>
            <button onClick = {postTodo} className='btn btn-warning mb-2 w-100'>Post Todo</button>
            <button onClick = {updateTodo} className = 'btn btn-info mb-2 w-100'>Update Todo</button>
            <button onClick = {createTodo} className='btn btn-primary mb-2 w-100'>Create Todo</button>
            <button onClick = {updateTitle} className='btn btn-success mb-2 w-100'>Update Title</button>
            <ul className = "list-group">
                {todos.map((todo) => (
                    <li className = "list-group-item" key = {todo.id}>
                    <button onClick = {() => deleteTodo(todo)} className='btn btn-danger float-end ms-2 '>Delete</button>
                    <button onClick = {() => fetchTodoById(todo.id)} className='btn btn-warning float-end me-2'>Edit</button>
                    {todo.title}
                    </li>
                ))}
            </ul>


        </div>
    );
}
export default WorkingWithArrays;