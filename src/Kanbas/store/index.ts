import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";


export interface KanbasState {
  modulesReducer: {
    modules: any[]
    module: any
  };
  assignmentsReducer: {
    assignments: any[]
    selectedAssignment: any
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
  }
});


export default store;