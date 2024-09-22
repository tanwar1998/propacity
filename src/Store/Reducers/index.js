import cacheStore from "./cacheReducer";
import permanentStore from './permanentReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({ data: cacheStore, storage: permanentStore });

export default rootReducer;
