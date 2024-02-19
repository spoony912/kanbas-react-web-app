import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import "../index.css";
import "../Modules/index.css";
import "./index.css";
import { HiOutlineRadio } from "react-icons/hi2";
import { FaSignInAlt, FaSignOutAlt, FaCog, FaSearch, FaFilter } from "react-icons/fa";


function Grades(){
    const {courseId} = useParams();
    const as = assignments.filter( (assignment)=> assignment.course === courseId);
    const es = enrollments.filter( (enrollment) => enrollment.course === courseId );

    return(
        <>

            <div>
                <div className="row ">
                        <div className="col">
                            <div className="text-danger wd-gradebook">
                               GradeBook <HiOutlineRadio />
                            </div>
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-outline-dark btn-light float-end me-3">
                                <FaSignInAlt /> Import
                            </button>
                        </div>
                        <div className="col-auto">
                            <div className="dropdown">
                                <button className="btn btn-light btn-outline-dark dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FaSignOutAlt />  Export
                                </button>
                                <ul className="dropdown-menu">
                                    <li> <a className="dropdown-item" href="#">Export...</a></li>
                                    <li> <a className="dropdown-item" href="#">B...</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-outline-dark btn-light float-end me-3">
                                <FaCog />
                            </button>
                        </div>
                        
                        
                        
                        
                        
                        
                </div>

            </div>
            <div className="row fw-bold fs-5 mt-3 mb-2 me-4">
                    <div className="col text-start">Student Names</div>
                    <div className="col text-start">Assignment Names</div>
            </div>                
            <div className="row me-4">
                <div className="col">
                    <div className="input-group">
                        <span className="input-group-text bg-white">
                          <FaSearch />
                        </span>
                        <select className="form-select form-control-lg">
                            <option selected>Search Students</option>
                            {es.map((enrollment) => {
                                    const user = users.find(user => user._id === enrollment.user && enrollment.course === courseId);
                                    return (
                                        <option key={user?._id}>{user?.firstName} {user?.lastName}</option>
                                    );
                                })}
                        </select>
                    </div>    
                </div>
                <div className="col">
                    <div className="input-group">
                        <span className="input-group-text bg-white">
                            <FaSearch />
                        </span>
                        <select className="form-select form-control-lg">
                            <option selected>Search Assignments</option>
                            {as.map((assignment) => (
                                    <option key={assignment._id}>{assignment.title}</option>
                                ))}
                        </select>
                    </div> 
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <button type="button" className="btn btn-light btn-outline-secondary btn-block">
                        <FaFilter /> Apply Filters
                    </button>
                    
                </div>
            </div>  
            <br/>         

            <div>
                <div className="table-responsive mt-3">
            <table className="table table-striped table-bordered">
              <thead className="align-middle text-center">
                <tr>
                    <th>Student Name</th>
                    {as.map((assignment) => (<th>{assignment.title}</th>))}
                </tr>
                
              </thead>
              <tbody className="align-middle text-center">
                {es.map((enrollment) => {
                  const user = users.find((user) => user._id === enrollment.user);
                  return (
                    <tr>
                       <td  className="text-danger">{user?.firstName} {user?.lastName}</td>
                       {as.map((assignment, index) => {
                         const grade = grades.find(
                           (grade) => grade.student === enrollment.user && grade.assignment === assignment._id && assignment.course === courseId);
                           if(index == 0) {
                            return (
                                <td>
                                    <input  className="form-control wd-ph-center" type="number"  placeholder={grade?.grade || ""}/>
                                </td>
                            );
                           }
                           else {
                            return (
                                <td>
                                    {grade?.grade || <input className="form-control wd-ph-center"  type="number" placeholder={grade?.grade || ""}/>}
                                </td>);
                           }
                           
                        })}
                    </tr>);
                })}
              </tbody>
            </table>
                </div>
            </div>
        </>
    )

}
export default Grades;