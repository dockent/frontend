import {ERROR_404_HANDLER} from "../constants/HttpStatusCodeHandler";
import Storage from "../Storage";

export const httpStatusCodeHandler = store => next => action => {
    if (action.type === ERROR_404_HANDLER) {
        let routerHistory = Storage.get('routerHistory');
        if (routerHistory === undefined) {
            throw new Error('Router history is absent inside storage');
        }
        routerHistory.replace('/404');
    }

    return next(action);
};