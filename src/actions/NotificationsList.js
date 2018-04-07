import {Notifications} from "../providers/UrlProvider";
import {
    NOTIFICATIONS_LIST_FAIL, NOTIFICATIONS_LIST_REQUEST,
    NOTIFICATIONS_LIST_SUCCESS
} from "../constants/Notifications";

/**
 * @returns {function(*=)}
 */
export function requestData() {
    return (dispatch) => {
        dispatch({type: NOTIFICATIONS_LIST_REQUEST});
        fetch(Notifications.list)
            .then((response) => {
                response.json()
                    .then((data) => {
                        dispatch({
                            type: NOTIFICATIONS_LIST_SUCCESS,
                            payload: data
                        });
                    });
            })
            .catch((error) => {
                dispatch({
                    type: NOTIFICATIONS_LIST_FAIL,
                    payload: error
                });
            });
    };
}