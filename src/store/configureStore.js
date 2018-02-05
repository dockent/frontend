import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "../reducers";
import thunkMiddleware from 'redux-thunk';
import {createLogger} from "redux-logger";

export default function configureStore() {
    return compose(
        applyMiddleware(thunkMiddleware),
        applyMiddleware(createLogger())
    )(createStore)(rootReducer);
}