import {combineReducers} from "redux";
import dashboard from "./dashboard";
import containersList from "./containersList";

export const rootReducer = combineReducers({dashboard, containersList});