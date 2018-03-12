import {Network} from "../../providers/UrlProvider";
import {
    NETWORK_LIST_FAIL, NETWORK_LIST_REQUEST, NETWORK_LIST_SUCCESS, NETWORK_REMOVE_FAIL,
    NETWORK_REMOVE_REQUEST, NETWORK_REMOVE_SUCCESS
} from "../../constants/Network";
import {notify} from "react-notify-toast";
import _ from 'lodash';

/**
 * @returns {function(*=)}
 */
export function requestData() {
    return (dispatch) => {
        dispatch({type: NETWORK_LIST_REQUEST});
        fetch(Network.list)
            .then((response) => {
                response.json()
                    .then((data) => {
                        dispatch({
                            type: NETWORK_LIST_SUCCESS,
                            payload: data
                        });
                    });
            })
            .catch((error) => {
                dispatch({
                    type: NETWORK_LIST_FAIL,
                    payload: error
                });
            });
    };
}

/**
 * @param {Object[]} selected
 * @returns {function(*=)}
 */
export function removeNetwork(selected) {
    return (dispatch) => {
        dispatch({type: NETWORK_REMOVE_REQUEST, payload: selected});
        fetch(Network.remove, {
            method: 'POST',
            body: JSON.stringify({
                id: _.map(selected, (value) => (value.Id))
            })
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        notify.show('Network removed', 'success');
                        dispatch({
                            type: NETWORK_REMOVE_SUCCESS,
                            payload: data
                        });
                    });
            })
            .catch((error) => {
                notify.show(error, 'error');
                dispatch({
                    type: NETWORK_REMOVE_FAIL,
                    payload: error
                });
            });
    };
}