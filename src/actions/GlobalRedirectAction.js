import {ROUTING} from "../constants/Routing";

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