import {combineReducers} from "redux";
import dashboard from "./dashboard";
import containersList from "./containersList";
import containerInspect from "./containerInspect";
import containerCreate from "./containerCreate";
import imagesList from "./imagesList";

export const rootReducer = combineReducers({dashboard, containersList, containerInspect, containerCreate, imagesList});