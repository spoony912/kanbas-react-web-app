import {courses} from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation, Link } from "react-router-dom";
import { HiBars3, HiMiniEye} from "react-icons/hi2";

import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import "./index.css";
import { FaBars, FaCaretDown, FaTimes,FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaHistory, FaLaptop, FaArrowAltCircleRight, FaQuestionCircle} from "react-icons/fa";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    const location = useLocation();
    const currentPage = location.pathname.split("/").pop();
    

    return(
        
        <div className="d-flex">
            <div className="wd-flex-grow">
                <div>
                    <div className="d-none d-md-block">
                        <div className="container-fluid wd-header mt-3 ms-4 me-4">
                          <div className="row align-items-center ">
                              <div className="col-auto wd-bars-color">
                                  <HiBars3 /> 
                              </div>
                              <div className="col">
                                  <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-custom mb-0">
                                        <li className="breadcrumb-item" >
                                            <span className="wd-red-text wd-header-font">{course?.name}</span>
                                        </li>
                                        <li className="breadcrumb-item active wd-black-text wd-header-font" aria-current="page" >{currentPage}</li>
                                    </ol>
                                  </nav>
                              </div>
                              <div className="col-auto">
                                  <button type="button" className="btn btn-outline-dark btn-light btn-sm">

                                      <HiMiniEye /> Student View
                                  </button>
                              </div>
                          </div>
                          <hr/>
                        </div>
                    </div>
                    <div className="d-block d-md-none">
                        <div className="container-fluid"  style={{backgroundColor:"black"}}>
                      <div className="row align-items-center">
                        <div className="col-auto ms-3">
                          <a href="#" className="float-start" style={{color:"white"}} data-bs-toggle="collapse" data-bs-target="#collapse-kab-nav" aria-expanded="false" aria-controls="collapse-kab-nav">
                             <FaBars />
                          </a>
                        </div>
                        
                        <div className="col mt-2">
                            <span className="text-center align-items-center" style={{color:"white"}} >
                              <p> {course?.name} <br/> Modules</p>
                            </span>
                        </div>
                        <div className="col-auto me-3">
                            <button type="button" className="btn btn-sm">
                                <i style={{color:"white"}}><HiMiniEye /></i>
                               
                            </button>
                            <a href="#" className="d-md-none wd-black-text wd-dropdown-icon" data-bs-toggle="collapse" data-bs-target="#collapse-course-nav" aria-expanded="false" aria-controls="collapse-course-nav">
                                <i style={{color:"white"}}><FaCaretDown /></i>
                            </a>
                        </div>
                      </div>
                        </div>
                  </div>
                  <div className="d-block d-md-none">
                    <div className="row">
                      <div className="collapse" id="collapse-kab-nav">
                        <ul className="row wd-small-navigation">
                          <li><a href="#" style={{color:"gray"}} className="float-end wd-no-underline mt-2" data-bs-toggle="collapse" data-bs-target="#collapse-kab-nav" aria-expanded="false" aria-controls="collapse-kab-nav">
                              <i aria-hidden="true"><FaTimes /></i>
                            </a></li>
                          <li>
                              <Link to="/Kanbas/Dashboard" className="wd-no-underline">
                                <i><FaTachometerAlt /> Dashboard </i>
                              </Link>
                          </li>
                          <li>
                                <Link to ="/Kanbas/Account" className="wd-no-underline">
                                    <i style={{color:"gray"}}><FaRegUserCircle />Account </i>
                                </Link>
                          </li>    
                          <li>
                              <Link to ="/Kanbas/Courses" className="wd-no-underline">
                                    <i style={{color:"gray"}}><FaBook />Courses </i>
                                </Link>
                          </li>
                          <li>
                              <Link to ="#" className="wd-no-underline">
                                    <i style={{color:"gray"}}><FaRegCalendarAlt />Calendar </i>
                                </Link>
                          </li>
                          <li>
                              <Link to ="#" className="wd-no-underline">
                                    <i style={{color:"gray"}}><FaInbox />Inbox </i>
                                </Link>
                          </li>
                          <li>
                              <Link to ="#" className="wd-no-underline">
                                    <i style={{color:"gray"}}><FaHistory />History </i>
                                </Link>
                          </li>
                          <li>
                              <Link to ="#" className="wd-no-underline">
                                    <i style={{color:"gray"}}><FaLaptop />Studio </i>
                                </Link>
                          </li>
                          <li><a href="#" className="wd-no-underline">
                              <i className="fa fa-sign-out"></i> Commons</a>
                              <Link to ="#" className="wd-no-underline">
                                    <i style={{color:"gray"}}><FaArrowAltCircleRight />Commons </i>
                                </Link>
                          </li>
                          <li><Link to ="#" className="wd-no-underline">
                                    <i style={{color:"gray"}}><FaQuestionCircle  />Help </i>
                                </Link>
                         </li>
                        </ul>
                      </div>
                      <hr/>
                  </div>
                  <div className="row">
                    <div className="collapse" id="collapse-course-nav">
                      <ul className="row wd-small-navigation">
                        
                        <li><a href="/Kanbas/Courses/Home/screen.html" className="wd-no-underline">
                          <i className="fa fa-home" aria-hidden="true"></i> Home</a></li>
                        <li><a href="/Kanbas/Courses/Modules/screen.html" className="wd-no-underline">
                          <i className="fa fa-modx" aria-hidden="true"></i> Modules</a></li>
                        <li><a href="http://piazza.com" className="wd-no-underline">
                          <i className="fa fa-object-ungroup" aria-hidden="true"></i> Piazza</a></li>
                        <li><a href="#" className="wd-no-underline">
                          <i className="fa fa-object-ungroup" aria-hidden="true"></i> Zoom Meetings</a></li>
                        <li ><a href="/Kanbas/Courses/Assignments/screen.html" className="wd-no-underline">
                          <i className="fa fa-file-text-o" aria-hidden="true"></i> Assignments</a></li>
                        <li><a href="#" className="wd-no-underline">
                          <i className="fa fa-rocket" aria-hidden="true"></i> Quizzes</a></li>     
                        <li ><a href="/Kanbas/Courses/Grades/screen.html" className="wd-no-underline">
                          <i className="fa fa-book" aria-hidden="true"></i> Grades</a></li>
                        <li><a href="#" className="wd-no-underline">
                          <i className="fa fa-users" aria-hidden="true"></i> People</a></li>   
                        <li><a href="#" className="wd-no-underline">
                          <i className="fa fa-object-ungroup" aria-hidden="true"></i> Panopto Video</a></li> 
                        <li><a href="#" className="wd-no-underline">
                          <i className="fa fa-comments-o" aria-hidden="true"></i> Discussions</a></li>
                        <li><a href="#" className="wd-no-underline">
                          <i className="fa fa-bullhorn" aria-hidden="true"></i> Announcements</a></li>
                        <li><a href="#" className="wd-no-underline">
                          <i className="fa fa-file" aria-hidden="true"></i> Pages</a></li>
                        <li><a href="#" className="wd-no-underline">
                          <i className="fa fa-folder" aria-hidden="true"></i> Files</a></li>
                        <li><a href="#" className="wd-no-underline">
                          <i className="fa fa-list-alt" aria-hidden="true"></i> Rubrics</a></li>
                        <li><a href="#" className="wd-no-underline">
                          <i className="fa fa-smile-o" aria-hidden="true"></i> Outcomes</a></li>
                        <li><a href="#" className="wd-no-underline">
                          <i className="fa fa-circle-thin" aria-hidden="true"></i> Collaborations</a></li>
                        <li><a href="#" className="wd-no-underline">
                          <i className="fa fa-files-o" aria-hidden="true"></i> Syllabus</a></li>
                        <li><a href="/Kanbas/Courses/Settings/Course Details/screen.html" className="wd-no-underline">
                          <i className="fa fa-sliders" aria-hidden="true"></i> Settings</a></li> 
                      </ul>
                      <br/>
                    </div>
                   </div> 
                  </div>                    

                    <div style={{ display: 'flex', flexDirection: 'row' }}>

                        <div className="d-none d-md-block">
                            <CourseNavigation />
                        </div>
                        <div className="wd-full-width">
                            <div className="container">
                                <div className="row">
                                    <div className="ms-2 mt-2 me-4 mb-2">
                                        <Routes>
                                            <Route path="/" element={<Navigate to="Home" />} />
                                            <Route path="Home" element={<Home />} />
                                            <Route path="Modules" element={<Modules />} />
                                            <Route path="Zoom-Meetings" element={<h1>Zoom Meetings</h1>} />
                                            <Route path="Assignments" element={<Assignments />} />
                                            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                                            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                                            <Route path="Grades" element={<Grades />} />
                                            <Route path="Piazza" element={<h1>Piazza</h1>} />
                                            <Route path="People" element={<h1>People</h1>} />
                                            <Route path="Panopto-Video" element={<h1>Panopto Video</h1>} />
                                            <Route path="Discussions" element={<h1>Discussions</h1>} />
                                            <Route path="Announcements" element={<h1>Announcements</h1>} />
                                            <Route path="Pages" element={<h1>Pages</h1>} />
                                            <Route path="Files" element={<h1>Files</h1>} />
                                            <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                                            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                                            <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                                            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                                            <Route path="Settings" element={<h1>Settings</h1>} />
                                        </Routes>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
         </div>
    );

}
export default Courses;
