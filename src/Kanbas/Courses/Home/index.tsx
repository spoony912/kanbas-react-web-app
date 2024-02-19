import { HiBell, HiCalendarDays, HiCheck, HiDocumentText, HiEllipsisVertical, HiMiniChartBar, HiMiniEye } from "react-icons/hi2";
import ModuleList from "../Modules/List";
import { GrAnnounce } from "react-icons/gr";
import { HiBan, HiDatabase } from "react-icons/hi";
import { ImTarget } from "react-icons/im";
import { useParams } from "react-router-dom";
import { courses } from "../../Database";
import "../index.css"
function Home() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <div> 
 
            <div className="wd-full-width">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-9 pe-0 ps-0">
                            <div className="d-flex justify-content-end me-4 mt-2">
                                <button type="button" className="btn btn-outline-dark btn-light me-1">Collapse All</button>
                                <button type="button" className="btn btn-outline-dark btn-light me-1">View Progress</button>
                                <label htmlFor="select-one-publish"></label>
                                <select id="select-one-publish" className="me-1">
                                    <option selected>Publish All</option>
                                </select>
                                <button type="button" className="btn btn-danger me-1"> + Module</button>
                                <button type="button" className="btn btn-outline-dark btn-light">
                                    <HiEllipsisVertical />
                                </button>
                            </div>
                            <hr className="me-4"/>
                            <div className="ms-2 mt-2 me-4 mb-2">
                                <ModuleList />
                            </div>
                        </div>
                        <div className="d-none d-lg-block col-lg-3 pe-4 ps-1" >
                            <div>
                                <div className="mb-3">
                                    <h5>Course Status</h5>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6">
                                                <button type="button" className="btn btn-outline-dark btn-light w-100">
                                                    <HiBan />Unpublish</button>
                                            </div>
                                            <div className="col-6">
                                                <button type="button" className="btn btn-success  w-100">
                                                    <HiCheck />Published</button>
                                            </div>
                                        </div>
                                    </div>    

                                    <ul className="list-unstyled mt-4">
                                    <li>
                                         <button type="button" className="btn btn-outline-dark btn-light ps-2 pe-2 pt-2 pb-2 mb-2 w-100">
                                             <HiDocumentText /> Import Existing Content</button>
                                    </li>
                                    <li>
                                        <button type="button" className="btn btn-outline-dark btn-light ps-2 pe-2 pt-2 pb-2 mb-2 w-100">
                                            <HiDatabase /> Import From Commons</button>
                                    </li>
                                    <li>
                                        <button type="button" className="btn btn-outline-dark btn-light ps-2 pe-2 pt-2 pb-2 mb-2 w-100">
                                            <ImTarget /> Choose Home Page</button>
                                    </li>
                                    <li>
                                        <button type="button" className="btn btn-outline-dark btn-light ps-2 pe-2 pt-2 pb-2 mb-2 w-100">
                                            <HiMiniChartBar /> View Course Stream</button>
                                    </li>
                                    <li>
                                        <button type="button" className="btn btn-outline-dark btn-light ps-2 pe-2 pt-2 pb-2 mb-2 w-100">
                                            <GrAnnounce /> New Announcement</button>
                                    </li>
                                    <li>
                                        <button type="button" className="btn btn-outline-dark btn-light ps-2 pe-2 pt-2 pb-2 mb-2 w-100">
                                            <HiMiniChartBar /> New Analytics</button>
                                    </li>
                                    <li>
                                        <button type="button" className="btn btn-outline-dark btn-light ps-2 pe-2 pt-2 pb-2 mb-2 w-100">
                                            <HiBell /> View Course Notifications</button>
                                    </li>
                                    </ul>   
                                </div>

                                <div className="mb-4">
                                    <h6 className="fw-bold">To Do</h6>
                                    <hr/>
                                    <p className="ps-2 wd-hyperlink">
                                        <a href="#">
                                            <span>Grade A1 - ENV + HTML</span>
                                        </a>
                                        <a href="#" className="wd-no-underline float-end">x</a>
                                    </p>
                                    <p className="ps-2 wd-smalltext"> 100 points · Sep 18 at 11:59 pm </p>
                                </div>
                
                                <div className="wd-hyperlink">
                                    <h6 className="fw-bold">Coming Up</h6>
                                    <a href="#" style={{fontSize:"small"}}>View Calendar</a>
                                    <hr />
                                    <ul className="list-unstyled">
                                        <li>
                                            <i className=" me-2 float-start ms-1 mt-1" aria-hidden="true"></i>  <HiCalendarDays />
                                            <a className="ps-2" href="#">
                                                <span>Lecture</span>
                                            </a>
                                            <p className="ps-4 ms-2 wd-smalltext"> {course?.name} Lecture
                                                <br/>
                                                Jan 8 at 11:45am
                                            </p>
                                        </li>
                                        <li>
                                            <i className="me-2 float-start ms-1 mt-1" aria-hidden="true"></i> <HiCalendarDays />
                                            <a className="ps-2" href="#">
                                                <span>Lecture</span>
                                            </a>
                                            <p className="ps-4 ms-2 wd-smalltext">{course?.name} Lecture
                                                <br/>
                                                Jan 15 at 11:45am
                                            </p>
                                        </li>
                                        <li>
                                            <i className=" me-2 float-start ms-1 mt-1" aria-hidden="true"></i>  <HiCalendarDays />
                                            <a className="ps-2" href="#">
                                                <span>Lecture</span>
                                            </a>
                                            <p className="ps-4 ms-2 wd-smalltext">{course?.name} Lecture
                                                <br/>
                                                Jan 22 at 6pm
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;