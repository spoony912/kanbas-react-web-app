import React from "react";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodosReducer from "./todos/todosReducer";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <AddRedux /> <br/>
      <CounterRedux /> <br/>
      <HelloRedux /> <br/>
      <TodoList /> <br/>
    </div>
  );
};

export default ReduxExamples;