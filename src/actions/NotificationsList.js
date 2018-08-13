import {Notifications} from "../providers/UrlProvider";
import {
    NOTIFICATIONS_DELETE_FAIL,
    NOTIFICATIONS_DELETE_REQUEST, NOTIFICATIONS_DELETE_SUCCESS,
    NOTIFICATIONS_LIST_FAIL, NOTIFICATIONS_LIST_REQUEST,
    NOTIFICATIONS_LIST_SUCCESS, NOTIFICATIONS_MARK_AS_UNREAD_FAIL, NOTIFICATIONS_MARK_AS_UNREAD_REQUEST,
    NOTIFICATIONS_MARK_AS_UNREAD_SUCCESS
} from "../constants/Notifications";
import {notify} from "react-notify-toast";

/**
 * @param {boolean} changeStatus
 * @returns {function(*=)}
 */
export function requestData(changeStatus = true) {
    return (dispatch) => {
        dispatch({type: NOTIFICATIONS_LIST_REQUEST});
        fetch(Notifications.list, {
            method: 'POST',
            body: JSON.stringify({
                changeStatus: changeStatus
            })
        })
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

/**
 * @param {int} id
 * @returns {function(*=)}
 */
export function markAsUnread(id) {
    return (dispatch) => {
        dispatch({type: NOTIFICATIONS_MARK_AS_UNREAD_REQUEST, payload: id});
        fetch(Notifications.markAsUnread, {
            method: 'POST',
            body: JSON.stringify({
                id: id
            })
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        switch (data.status) {
                            case 'success':
                                dispatch({
                                    type: NOTIFICATIONS_MARK_AS_UNREAD_SUCCESS,
                                    payload: data
                                });
                                notify.show('Notify marked as unread', 'success');
                                break;
                            default:
                            case 'error':
                                dispatch({
                                    type: NOTIFICATIONS_MARK_AS_UNREAD_FAIL,
                                    payload: data
                                });
                                break;
                        }
                    });
            })
            .catch((error) => {
                dispatch({
                    type: NOTIFICATIONS_MARK_AS_UNREAD_FAIL,
                    payload: error
                });
            });
    };
}

/**
 * @param {int} id
 * @returns {function(*=)}
 */
export function deleteNotification(id) {
    return (dispatch) => {
        dispatch({type: NOTIFICATIONS_DELETE_REQUEST, payload: id});
        fetch(Notifications.delete, {
            method: 'POST',
            body: JSON.stringify({
                id: id
            })
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        dispatch({
                            type: NOTIFICATIONS_DELETE_SUCCESS,
                            payload: data
                        });
                        notify.show('Notification deleted', 'success');
                    });
            })
            .catch((error) => {
                dispatch({
                    type: NOTIFICATIONS_DELETE_FAIL,
                    payload: error
                });
            });
    };
}