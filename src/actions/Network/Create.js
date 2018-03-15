import {Network} from "../../providers/UrlProvider";
import {notify} from "react-notify-toast";
import {ROUTING} from "../../constants/Routing";
import {NETWORK_CREATE_FAIL, NETWORK_CREATE_REQUEST, NETWORK_CREATE_SUCCESS} from "../../constants/Network";

/**
 * @param {Object} data
 * @returns {function(*=)}
 */
export function createNetwork(data) {
    return (dispatch) => {
        dispatch({type: NETWORK_CREATE_REQUEST, payload: data});
        fetch(Network.create, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        switch (data.status) {
                            case 'success':
                                dispatch({
                                    type: NETWORK_CREATE_SUCCESS,
                                    payload: data
                                });
                                notify.show('Network created', 'success');
                                dispatch({
                                    type: ROUTING,
                                    payload: {url: '/network'}
                                });
                                break;
                            default:
                            case 'error':
                                dispatch({
                                    type: NETWORK_CREATE_FAIL,
                                    payload: data
                                });
                                break;
                        }
                    });
            })
            .catch((error) => {
                dispatch({
                    type: NETWORK_CREATE_FAIL,
                    payload: error
                });
            });
    };
}