import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoList from "./todos/TodoList";

function Assignment3() {
    return(
        <div >
            <h1>Assignment 3</h1>
            <TodoList />
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>         
            <Add a={3} b={4} />   
            <PathParameters />
            <ConditionalOutput />
            <Styles />
            <Classes />
            
            <JavaScript />
            
        </div>



    );
}

export default Assignment3