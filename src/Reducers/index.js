import upDown from "./upDown";
import mulDivReducer from "./mulDiv";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ upDown: upDown, mulDiv: mulDivReducer });

export default rootReducer;
