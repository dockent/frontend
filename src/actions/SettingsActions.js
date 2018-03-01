import {Settings} from "../providers/UrlProvider";
import {notify} from "react-notify-toast";
import {
    SETTINGS_GET_FAIL,
    SETTINGS_GET_REQUEST, SETTINGS_GET_SUCCESS, SETTINGS_SAVE_FAIL, SETTINGS_SAVE_REQUEST,
    SETTINGS_SAVE_SUCCESS
} from "../constants/Settings";

/**
 * @param {Object} data
 * @returns {function(*=)}
 */
export function save(data) {
    return (dispatch) => {
        dispatch({type: SETTINGS_SAVE_REQUEST, payload: data});
        fetch(Settings.url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        switch (data.status) {
                            case 'success':
                                dispatch({
                                    type: SETTINGS_SAVE_SUCCESS,
                                    payload: data
                                });
                                notify.show('Settings saved', 'success');
                                break;
                            default:
                            case 'error':
                                dispatch({
                                    type: SETTINGS_SAVE_FAIL,
                                    payload: data
                                });
                                break;
                        }
                    });
            })
            .catch((error) => {
                dispatch({
                    type: SETTINGS_SAVE_FAIL,
                    payload: error
                });
            });
    };
}

/**
 * @returns {function(*=)}
 */
export function getSettings() {
    return (dispatch) => {
        dispatch({type: SETTINGS_GET_REQUEST});
        fetch(Settings.url)
            .then((response) => {
                response.json()
                    .then((data) => {
                        dispatch({
                            type: SETTINGS_GET_SUCCESS,
                            payload: data
                        });
                    });
            })
            .catch((error) => {
                dispatch({
                    type: SETTINGS_GET_FAIL,
                    payload: error
                });
            });
    }
}