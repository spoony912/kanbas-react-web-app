import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import ArrowFunctions from "./functions/ArrowFunctions";
import ImpliedReturn from "./functions/ImpliedReturn";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import ArrrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToFromArrays";
import ForLoops from "./arrays/ForLoop";
import MapFunction from "./arrays/MapFunction";
import JsonStringify from "./json/JsonStringify";
import FindFunction from "./arrays/FindFunction";
import FindIndex from "./arrays/FindIndex";
import FilterFunction from "./arrays/FilterFunction";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";

function JavaScript() {
   console.log('Hello World');
    return(
        <div>
           <h3>JavaScript</h3>
         
           <VariablesAndConstants />
           <VariableTypes />
           <BooleanVariables />
           <IfElse />
           <TernaryOperator />
           <ES5Functions />
           <ArrowFunctions />
           <ImpliedReturn />
           <FunctionParenthesisAndParameters />
           <WorkingWithArrays />
           <ArrrayIndexAndLength />
           <AddingAndRemovingDataToFromArrays />
           <ForLoops />
           <MapFunction />
           <JsonStringify />
           <FindFunction />
           <FindIndex />
           <FilterFunction />
           <TemplateLiterals />
           <House />
           <Spreading />
           <Destructing />
           <FunctionDestructing />

        </div>
     );
  
}

export default JavaScript;