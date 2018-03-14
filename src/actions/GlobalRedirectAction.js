import {ROUTING} from "../constants/Routing";

/**
 * @param {history} history
 * @param {string} url
 * @returns {function(*)}
 */
export function redirect(history, url) {
    return (dispatch) => {
        dispatch({
            type: ROUTING,
            payload: {
                history: history,
                url: url
            }
        });
    };
}