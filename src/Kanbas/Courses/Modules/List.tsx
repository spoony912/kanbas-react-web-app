// import React, { useState } from "react";
// import "./index.css";
// import { modules } from "../../Database";
// import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
// import { useParams } from "react-router";

// function ModuleList() {
//     const { courseId } = useParams();
//     const {moduleList, setModuleList} = useState(modules);
//     const [module, setModule] = useState({
//       name: "New Module",
//       description: "New Description",
//       course: courseId,
//     });
//     const addModule = (module: any) => {
//       const newModule = { ...module,
//         _id: new Date().getTime().toString() };
//       const newModuleList = [newModule, ...moduleList];
//       setModuleList(newModuleList);
//     };
//     const deleteModule = (moduleId: string) => {
//       const newModuleList = moduleList.filter(
//         (module) => module._id !== moduleId );
//       setModuleList(newModuleList);
//     };
//     const updateModule = () => {
//       const newModuleList = moduleList.map((m) => {
//         if (m._id === module._id) {
//           return module;
//         } else {
//           return m;
//         }
//       });
//       setModuleList(newModuleList);
//     };
  
  
  

//     return(
//         <>
//             {/* <!-- Add buttons here --> */}
//             <ul className="list-group wd-modules">
//               <li className="list-group-item">
//                 <button onClick={() => { addModule(module) }} >Add</button>
//                 <input value={module.name}
//                   onChange={(e) => setModule({
//                   ...module, name: e.target.value })}/>
//                 <textarea value={module.description}
//                   onChange={(e) => setModule({
//                     ...module, description: e.target.value })}/>
//               </li>

//               {moduleList
//               .filter((module) => module.course === courseId)
//               .map((module, index) => (
//                 <li key = {module._id || index} className="list-group-item">
//                    <button onClick={() => deleteModule(module._id)}>Delete</button>

//                   <div>
//                     <FaEllipsisV className="me-2" />
//                     {module.name}
//                     <span className="float-end">
//                       <FaCheckCircle className="text-success" />
//                       <FaPlusCircle className="ms-2" />
//                       <FaEllipsisV className="ms-2" />
//                     </span>
//                   </div>
//                   {(<ul className="list-group">
//                       {module.lessons?.map((module.lesson) => (
//                         <li className="list-group-item">
//                           <FaEllipsisV className="me-2" />
//                           {module.lesson.name}
//                           <span className="float-end">
//                             <FaCheckCircle className="text-success" />
//                             <FaEllipsisV className="ms-2" />
//                           </span>
//                         </li>
//                       ))
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>
        
//         </>
//     );


// }

// export default ModuleList;


import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { KanbasState} from "../../store";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div>
            <h3>Module Editor</h3>
            <label htmlFor="moduleName">Module Name</label>
            <input aria-label="Module Name" className="form-control me-4"
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }/>
            <br/>
            <label htmlFor="moduleDescription">Module Description</label>
            <textarea aria-label="Module Description" className="form-control me-4"
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }/>
        </div>
        <div className="mt-3">
          <button
            onClick={() => dispatch(addModule({ ...module, course: courseId }))} className="btn btn-success float-end">
            Add
          </button>
          <button
            onClick={() => dispatch(updateModule(module))} className="btn btn-primary me-4 float-end" >
            Update
          </button>
        </div>
        
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">

            <h3>{module.name}</h3>
            <p>{module.description}</p>
            <button
              onClick={() => dispatch(setModule(module))} className="btn btn-warning float-end ">
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteModule(module._id))} className="btn btn-danger float-end me-4">
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;