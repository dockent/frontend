import {combineReducers} from "redux";
import dashboard from "./dashboard";
import containersList from "./containersList";
import containerInspect from "./containerInspect";
import containerCreate from "./containerCreate";
import imagesList from "./imagesList";
import imageBuild from "./imageBuild";

export const rootReducer = combineReducers({
    dashboard,
    containersList,
    containerInspect,
    containerCreate,
    imagesList,
    imageBuild
});