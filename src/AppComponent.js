import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { Decrement, Increment } from "./Actions/index.js";


function mapStateToProps(state) {
  return { state: state }
}


const AppComponent = (props) => {
  const myState = useSelector((state) => state.upDown);
  console.log('props>>>>>>>>>>>>>', props)
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <h1>{myState}</h1>
      <button onClick={() => dispatch(Increment())}>+</button>
      <button onClick={() => dispatch(Decrement())}>-</button>
    </div>
  );
};
export default connect(mapStateToProps)(AppComponent)
// export default AppComponent;
