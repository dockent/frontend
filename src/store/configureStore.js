import {compose, createStore} from "redux";
import {rootReducer} from "../reducers";

export default function configureStore() {
    return compose()(createStore)(rootReducer);
}