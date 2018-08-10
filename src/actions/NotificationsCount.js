import {
    NOTIFICATIONS_GET_UNREAD_COUNT_FAIL,
    NOTIFICATIONS_GET_UNREAD_COUNT_REQUEST,
    NOTIFICATIONS_GET_UNREAD_COUNT_SUCCESS
} from "../constants/Notifications";
import {Notifications} from "../providers/UrlProvider";

/**
 * @returns {Function}
 */
export function getUnreadCount() {
    return (dispatch) => {
        dispatch({type: NOTIFICATIONS_GET_UNREAD_COUNT_REQUEST});
        fetch(Notifications.unreadCount).then((response) => {
            response.json().then((data) => {
                dispatch({
                    type: NOTIFICATIONS_GET_UNREAD_COUNT_SUCCESS,
                    payload: data
                })
            });
        }).catch((error) => {
            dispatch({
                type: NOTIFICATIONS_GET_UNREAD_COUNT_FAIL,
                payload: error
            });
        });
    };
}