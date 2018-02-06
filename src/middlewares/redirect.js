import {ROUTING} from "../constants/Routing";

export const redirect = store => next => action => {
    if (action.type === ROUTING) {
        action.payload.history.push(action.payload.url);
    }

    return next(action);
};