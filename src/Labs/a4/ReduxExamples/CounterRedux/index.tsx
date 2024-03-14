import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";
import { increment, decrement } from "./counterReducer";
function CounterRedux() {
  const { count } = useSelector((state: LabState) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <button className="btn btn-primary" onClick={() => dispatch(increment())}> Increment </button> <br/>
      <button className="btn btn-primary" onClick={() => dispatch(decrement())}> Decrement </button>
    </div>
  );
}
export default CounterRedux;