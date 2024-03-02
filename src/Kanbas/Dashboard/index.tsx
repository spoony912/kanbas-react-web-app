import React, {useState} from "react";
import { Link } from "react-router-dom";

// --------- interface
interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image?: string;   // Assuming that image is optional
}

interface DashboardProps {
  courses: Course[];
  course: Course;
  setCourse: (course: Course) => void;
  addNewCourse: () => void;
  deleteCourse: (id: string) => void;
  updateCourse: () => void;

}

function Dashboard( 
  { courses, 
    course, 
    setCourse, 
    addNewCourse,
    deleteCourse, 
    updateCourse }: DashboardProps
  
) {

  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h5>Course Editor</h5>
      <label htmlFor="courseName">Course Name</label>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <label htmlFor="courseNumber" className="mt-2">Course Number</label>
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <label htmlFor="courseStartDate" className="mt-2">Start Date</label>
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <label htmlFor="courseEndDate" className="mt-2">End Date</label>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

      <div className="mt-2">
        <button onClick={addNewCourse} className="btn btn-success float-end">Add </button>
        <button onClick={updateCourse} className="btn btn-primary float-end me-4 ">Update </button>
      </div>       
      <br/>
    
      
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course, index) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: "150px" }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} <br/>
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                  <div>
                    <button onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                      }} className="btn btn-warning  float-end">Edit </button> 
                      <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                      }} className="btn btn-danger float-end me-2"> Delete</button>  
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;