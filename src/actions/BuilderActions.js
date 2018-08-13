import {BUILDER_SUBMIT_FAIL, BUILDER_SUBMIT_REQUEST, BUILDER_SUBMIT_SUCCESS} from "../constants/Builder";
import {Builder} from "../providers/UrlProvider";
import {notify} from "react-notify-toast";
import {ROUTING} from "../constants/Routing";

/**
 *
 * @param {Object} data
 * @returns {function(*=)}
 */
export function builderRequest(data) {
    return (dispatch) => {
        dispatch({type: BUILDER_SUBMIT_REQUEST, payload: data});
        fetch(Builder.url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        switch (data.status) {
                            case 'success':
                                dispatch({
                                    type: BUILDER_SUBMIT_SUCCESS,
                                    payload: data
                                });
                                notify.show(data.message, 'success');
                                dispatch({
                                    type: ROUTING,
                                    payload: {url: '/images'}
                                });
                                break;
                            default:
                            case 'error':
                                dispatch({
                                    type: BUILDER_SUBMIT_FAIL,
                                    payload: data
                                });
                        }
                    });
            })
            .catch((error) => {
                dispatch({
                    type: BUILDER_SUBMIT_FAIL,
                    payload: error
                });
            });
    };
}