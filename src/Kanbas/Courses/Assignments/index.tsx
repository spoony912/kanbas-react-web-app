import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "../index.css"
import { HiEllipsisVertical, HiPlus } from "react-icons/hi2";

function Assignments() {
    const {courseId} = useParams();
    const assignmentList = assignments.filter( (assignment) => assignment.course === courseId);

    return(
        <>
            
            <div className="wd-full-width">
              <div className="me-4">
                <div className="container-fluid me-2 ms-1 me-4">
                    <div className="d-flex justify-content-between me-3">
                        <form className="w-40">
                            <input type="text" className="form-control" placeholder="Search for Assignment" />
                        </form>
                        <div className="float-end">
                            <button type="button" className="btn btn-outline-dark btn-light me-1"> + Group</button>
                            <button type="button" className="btn btn-danger me-1"> + Assignment</button>
                            <button type="button" className="btn btn-outline-dark btn-light me-1">
                                 <HiEllipsisVertical />
                            </button>
                        </div>
                    </div>
                </div>
              </div>
              <hr className="mt-4 mb-4 me-3" />
              <ul className="list-group wd-modules  ">
                <li className="list-group-item wd-green-left-border">
                  <div >
                    <FaEllipsisV className="me-2" /> ASSIGNMENTS
                    <span className="float-end">
                      {/* <FaCheckCircle className="text-success" /> */}
                      <span className="wd-eclipse ms-2">
                            40% of Total
                      </span>
                      <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                    </span>
                  </div>
                  <ul className="list-group">
                    {assignmentList.map((assignment) => (
                      <li className="list-group-item">
                        <FaEllipsisV className="me-2" />
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="wd-no-underline">{assignment.title}</Link>
                        <span className="float-end">
                          <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                          <hr/>
                          <span className="wd-smalltext">
                              Due: {assignment.due}, Points: {assignment.totalPoints}
                          </span>
                      </li>))}
                  </ul>
                </li>
              </ul>
             

            </div>

        </>
    )

}
export default Assignments;