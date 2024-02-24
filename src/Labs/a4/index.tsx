import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

function Assignment4() {
    function sayHello() {
        alert('Hello');
    }
    return(
        <div>
            <h1>Assignment 4</h1>
            <ReduxExamples /> <br/>
            <hr/>
            <ClickEvent /> <br/>
            <PassingDataOnEvent /> <br/>
            <PassingFunctions theFunction={sayHello} /> <br/>
            <EventObject /> <br/>
            <Counter /> <br/>
            <BooleanStateVariables /> <br/>
            <StringStateVariables /> <br/>
            <DateStateVariable /> <br/>
            <ObjectStateVariable /> <br/>
            <ArrayStateVariable /> <br/>
            <ParentStateComponent /> <br/>
            

        </div>



    );
}

export default Assignment4