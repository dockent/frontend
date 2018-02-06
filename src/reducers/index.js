import {combineReducers} from "redux";
import dashboard from "./dashboard";
import containersList from "./containersList";
import containerInspect from "./containerInspect";

export const rootReducer = combineReducers({dashboard, containersList, containerInspect});