import {ROUTING} from "../constants/Routing";
import Storage from "../Storage";

/**
 * @param store
 * @returns {function(*): function(*=)}
 */
export const redirect = store => next => action => {
    if (action.type === ROUTING) {
        let routerHistory = Storage.get('routerHistory');
        if (routerHistory === undefined) {
            throw 'Router history is absent inside storage';
        }
        routerHistory.push(action.payload.url);
    }

    return next(action);
};