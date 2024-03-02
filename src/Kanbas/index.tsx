import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import * as db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

// ----- interface
interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image?: string;   // Assuming that image is optional
}

function Kanbas() {

    
    const [courses, setCourses] = useState<Course[]>(db.courses);
    const [course, setCourse] = useState<Course>( {
      _id: "0", 
      name: "New Course", 
      number: "New Number",
      startDate: "2024-01-08", 
      endDate: "2024-04-27",
      image: "/images/reactjs.jpg"
  
    } )
    const addNewCourse = () => {
      const newCourse = { ...course,
                          _id: new Date().getTime().toString() };
      setCourses([...courses, { ...course, ...newCourse }]);
    };
  
    const deleteCourse = (courseId: string) => {
      setCourses(courses.filter((course) => course._id !== courseId))
    };
  
    const updateCourse = () => {
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          }
          else{
            return c;
          }     
        }));
      };

    return(
        <Provider store={store}>
          <div className="d-flex">
            <KanbasNavigation />
            
            <div style={{ flexGrow: 1 }}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={
                        <Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}/>} />
                    <Route path="Courses/:courseId/*" element={
                        <Courses courses={courses} />} />
                    <Route path="Calendar" element={<h1>Calendar</h1>} />
                    <Route path="Inbox" element={<h1>Inbox</h1>} />
                    <Route path="History" element={<h1>History</h1>} />
                    <Route path="Studio" element={<h1>Studio</h1>} />
                    <Route path="Commons" element={<h1>Commons</h1>} />
                    <Route path="Help" element={<h1>Help</h1>} />    
                </Routes>
            </div>
          </div>
        </Provider>    

  



    );
 }

export default Kanbas;