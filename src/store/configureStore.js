import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "../reducers";
import thunkMiddleware from 'redux-thunk';

export default function configureStore() {
    return compose(applyMiddleware(thunkMiddleware))(createStore)(rootReducer);
}