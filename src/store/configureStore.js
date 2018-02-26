import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "../reducers";
import thunkMiddleware from 'redux-thunk';
import {createLogger} from "redux-logger";
import {redirect} from "../middlewares/redirect";

/**
 * @returns {Store<any> | Store<StoreEnhancer<S>> | *}
 */
export default function configureStore() {
    return compose(
        applyMiddleware(thunkMiddleware),
        applyMiddleware(createLogger()),
        applyMiddleware(redirect)
    )(createStore)(rootReducer);
}