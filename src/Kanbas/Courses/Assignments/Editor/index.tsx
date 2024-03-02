import React , {useEffect, useState} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { HiCheckCircle } from "react-icons/hi";
import { HiEllipsisVertical } from "react-icons/hi2";
import { addAssignment, updateAssignment } from "../assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { KanbasState } from "../../../store";

function AssignmentEditor() {

    const { assignmentId } = useParams();
    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const assignments = useSelector((state:KanbasState) => state.assignmentsReducer.assignments);
    const [assignment, setAssignment] = useState(
        {
            _id: null,
            title: "",
            description: "",
            due: "",
            totalPoints: 0,
            course: "",
        }
    );

    useEffect(() => {
        if(assignmentId === "new") {
            setAssignment({
                _id: null,
                title: "",
                description: "",
                due: "",
                totalPoints: 0,
                course: courseId ?? "",
            });
        } else {
            const existedAssignment = assignments.find((a) => a._id === assignmentId);
            if(existedAssignment) {
                setAssignment(existedAssignment);
            }
            else {
                // can not find the assignment
            }
            
        }
    }, [assignmentId, assignments, courseId]);

    const [newAssignment, setNewAssignment] = useState( () => {
        const params = new URLSearchParams(window.location.search);
        return params.get('id') === "new";
    });

    const handleSave = async() => {
        if(assignmentId === "new") {
            const newId = new Date().getTime().toString();
            const newAssignment = {
                ...assignment, 
                _id: newId,
                course: courseId ?? "",
            };
            const actionResult = dispatch(addAssignment(newAssignment));
            console.log('New Assignment added:', actionResult.payload);
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);
        } else {
            const updatedAssignment = {
                ...assignment,
                course: courseId ?? "",
            };
            dispatch(updateAssignment(assignment));
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);
        }
        
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAssignment({
            ...assignment,
            title: e.target.value,
        });
    };

    const handleDecriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAssignment({
            ...assignment,
            description: e.target.value,
        });
    };

    const handleDueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAssignment({
            ...assignment,
            due: e.target.value,
        });
    };

    const handleTotalPointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAssignment({
            ...assignment,
            totalPoints: parseInt(e.target.value),
        });
    };


    return (
        <>
            <div className="d-flex justify-content-end me-4 mt-2">
                <div className="me-3 mt-1 text-success">
                    <HiCheckCircle /> Published
                </div>
                <button type="button" className="btn btn-outline-dark btn-light">
                    <HiEllipsisVertical />
                </button>
            </div>
            <hr className="me-4" />
            <div>
                
                <label htmlFor="assignmentTitle" className="form-label">Assignment Name</label>
                <input 
                    id = "assignmentTitle"
                    className="form-control mb-2"
                    value={newAssignment ? "" : assignment.title} 
                    onChange={handleTitleChange} />
                <textarea 
                    className="form-control mt-4 pb-2 pt-2" 
                    rows={4}
                    value={newAssignment ? "" : assignment.description}
                    onChange = {handleDecriptionChange} ></textarea>
            </div>
            <div className="container">
                <div className="d-flex justify-content-left">
                    <div className="w-75">
                        <div className="mt-4 row">
                            <label htmlFor="points" className="col-sm-4 col-form-label text-end">Points</label>
                            <div className="col-sm-8">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="points" 
                                    min="0" 
                                    max="100" 
                                    value={newAssignment ? "" : assignment.totalPoints}
                                    onChange = {handleTotalPointsChange} />
                            </div>
                        </div>
                        <div className="mt-4 row">
                            <label htmlFor="assignment-group" className="col-sm-4 col-form-label text-end">Assignment Group</label>
                            <div className="col-sm-8">
                                <select className="form-select" id="assignment-group">
                                    <option selected>ASSIGNMENTS</option>
                                    <option value="quizzes">QUIZZES</option>
                                    <option value="exams">EXAMS</option>
                                    <option value="project">PROJECT</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-4 row">
                            <label htmlFor="assignment-grade-format" className="col-sm-4 col-form-label text-end">Display Grade as</label>
                            <div className="col-sm-8">
                                <select className="form-select" id="assignment-grade-format">
                                    <option selected>Percentage</option>
                                    <option value="Score">Score</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-4 row">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-8">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="not-count" />
                                    <label className="form-check-label" htmlFor="not-count">Do not count this assignment towards the final grade</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 row">
                            <label htmlFor="assignment-sub-type" className="col-sm-4 col-form-label text-end">Submission Type</label>
                            <div className="col-sm-8 border p-3">
                                <div className="mb-3">
                                    <select className="form-select" id="assignment-sub-type">
                                        <option selected>Online</option>
                                    </select>
                                </div>
                                <div className="mb-3 fw-bold">
                                    Online Entry Options
                                </div>
                                <div className="form-check mb-2">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" checked />Text Entry
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" checked />Website URL
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" checked />Media Recordings
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" />Student Annotation
                                    </label>
                                </div>
                                <div className="form-check mb-2">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" checked />File Uploads
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 row">
                            <label htmlFor="assignment-assign" className="col-sm-4 col-form-label text-end">Assign</label>
                            <div className="col-sm-8 border p-3">
                                <div className="mb-1">
                                    <label htmlFor="assign-to" className="fw-bold col-form-label text-start">Assign To</label>
                                    <input className="form-control pb-2" id="assign-to" value="Everyone" />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="assignment-due" className="fw-bold col-form-label text-start">Due</label>
                                    <input className="form-control pb-2" id="assignment-due" type="date" value="2024-01-22" />

                                    <div className="row mb-1">
                                        <div className="col">
                                            <label htmlFor="assignment-available-from" className="fw-bold col-form-label text-start">Available from</label>
                                            <input className="form-control pb-2" id="assignment-available-from" type="date" value="2024-01-08" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="assignment-available-until" className="fw-bold col-form-label text-start">Until</label>
                                            <input className="form-control pb-2" id="assignment-available-until" type="date" />
                                        </div>
                                    </div>
                                    <div className="mb-1 row">
                                        <button type="button" className="w-100 btn btn-outline-secondary btn-light mt-3">+ Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <hr/>
            <form>
               <div className="d-flex justify-content-between align-items-center">
                    <label className="d-flex align-items-center">
                        <input type="checkbox" className="me-1" />Notify users that this content has changed
                    </label>
                    <div>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary btn-outline-dark btn-lg btn-light me-2">
                            Cancel
                        </Link>

                        <button type="button" onClick={handleSave} className="btn btn-primary btn-lg btn-danger ">
                            Save
                        </button>
                        
                    </div>
               </div> 
            </form>
        </>
            );
}
export default AssignmentEditor;