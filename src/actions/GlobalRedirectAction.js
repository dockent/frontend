import {ROUTING} from "../constants/Routing";

/**
 * @param {string} url
 * @returns {function(*)}
 */
export function redirect(url) {
    return (dispatch) => {
        dispatch({
            type: ROUTING,
            payload: {
                url: url
            }
        });
    };
}