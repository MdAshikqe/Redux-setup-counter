import "./App.css";
import { add, substract } from "./redux/featuares/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <>
      <h1>Redux setup</h1>
      <div>
        <p>{count}</p>
        <div>
          <button onClick={() => dispatch(add())}>add</button>
          <button onClick={() => dispatch(substract())}>subtract</button>
        </div>
      </div>
    </>
  );
}

export default App;
