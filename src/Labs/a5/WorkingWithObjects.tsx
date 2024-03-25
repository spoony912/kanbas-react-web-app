import React, { useState, useEffect } from "react";
import './index.css';
import axios from "axios";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, 
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due:"2024-04-01", 
        completed:false, 
        score:100
    });
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };

    const updateTitle = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };

    useEffect(() => {
        fetchAssignment();
    }, []);



    const [module, setModule] = useState({
        id:"MD101",
        name:"Introduction to Web Dev",
        description:"This module provides an introduction to Web Development",
        course: "CS5610"
    })
    const MODULE_URL = "http://localhost:4000/a5/module";

    return(
        <div>
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a href = {`http://localhost:4000/a5/assignment`}>
                Get Assignment
            </a>
            <br/>
            <a href = {`http://localhost:4000/a5/module`}>
                Get Module
                <br/>
            </a>
            <br/>
            <h4>Retrieving Properties</h4>
            <a className="btn btn-primary btn-margin-top" href = {`${ASSIGNMENT_URL}/title`}>Get Assignment Title </a> 
            <br/>
            <a className="btn btn-primary btn-margin-top" href = {`${MODULE_URL}/name`}>Get Module Name </a>
            <br/>
            <br/>
            <h4>Modifying Properties</h4>
            <h5>Assignment:</h5>
            <input type = "text" onChange = {(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value = {assignment.title}/> &nbsp;
            <a className="btn btn-primary btn-margin-top" href = {`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <br/>
            <br/>

            <input type = "number" onChange = {(e) => setAssignment({
                ...assignment,
                score: Number(e.target.value)
            })}
                value = {assignment.score}/> &nbsp;
            <a className="btn btn-primary btn-margin-top" href = {`${ASSIGNMENT_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <br/>
            Completed or not: {assignment.completed ? 'Yes':'No'} &nbsp;
            <input type = "checkbox"  onChange = {(e) => setAssignment({
                ...assignment,
                completed: e.target.checked
            })}
                checked = {assignment.completed}/> &nbsp;
            <a className="btn btn-primary btn-margin-top" href = {`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
                Update Completed
            </a>
            <br/>
            <br/>

            <h5>Update Assignment Title by using axios</h5>
            <input onChange = { (e) => {
                setAssignment( {
                    ...assignment,
                    title: e.target.value
                })
            }} value = {assignment.title} type="text"/> &nbsp;
            <button className = "btn btn-primary" onClick = {updateTitle}>
                Update Title to : {assignment.title}
            </button>
            <br/>
            <button className = "btn btn-primary btn-margin-top btn-danger" onClick = {fetchAssignment}>
                Fetch Assignment 
            </button>
            <br/>
            <br/>

            <h5>Module: </h5>
            <input type= "text" onChange = {(e) => setModule({
                ...module,
                name: e.target.value

            })}
                value = {module.name}/> &nbsp;
            <a className="btn btn-primary btn-margin-top" href = {`${MODULE_URL}/name/${module.name}`}>
                Update Name
            </a>
            <br/>
            <input type = "textarea" onChange= {(e) => setModule({
                ...module,
                description: e.target.value
            })}
                value = {module.description}/> &nbsp;
            <a className = "btn btn-primary btn-margin-top" href = {`${MODULE_URL}/description/${module.description}`}>
                Update Description
            </a>    
            

        </div>
    );
}
export default WorkingWithObjects;