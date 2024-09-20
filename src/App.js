import "./App.css";
import { useSelector, useDispatch, useStore } from "react-redux";
import { Divide, Multiply } from "./Actions/index.js";
import AppComponent from "./AppComponent";
import Main from './Components/main'
const App = () => {
  const myState = useSelector((state) => state.mulDiv);
  const store = useStore()
  console.log('store>>>>>>>>>>>>>>>>>', store,  ",<<<<<<<<<<<<<<<<<store.getstate>>>>>>>>>>>", store.getState())
  console.log('myState>>>>>>>>>>>>>>>>>', myState)
  const dispatch = useDispatch();

  return (
    <>
      <Main/>
      <h1>{myState?.multi}</h1>
      <button onClick={() => dispatch({ type: "Divide", payload: 5 })}>/</button>
      <button onClick={() => dispatch(Multiply())}>*</button>
      <AppComponent />
    </>
  );
};

export default App;
