import {CONTAINER_CREATE_FAIL, CONTAINER_CREATE_REQUEST, CONTAINER_CREATE_SUCCESS} from "../../constants/Containers";
import {Containers} from "../../providers/UrlProvider";
import {notify} from "react-notify-toast";
import {ROUTING} from "../../constants/Routing";

/**
 * @param {Object} data
 * @returns {function(*=)}
 */
export function createContainer(data) {
    return (dispatch) => {
        dispatch({type: CONTAINER_CREATE_REQUEST, payload: data});
        fetch(Containers.create, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        switch (data.status) {
                            case 'success':
                                dispatch({
                                    type: CONTAINER_CREATE_SUCCESS,
                                    payload: data
                                });
                                notify.show(data.message, 'success');
                                dispatch({
                                    type: ROUTING,
                                    payload: {url: '/containers'}
                                });
                                break;
                            default:
                            case 'error':
                                dispatch({
                                    type: CONTAINER_CREATE_FAIL,
                                    payload: data
                                });
                                break;
                        }
                    });
            })
            .catch((error) => {
                dispatch({
                    type: CONTAINER_CREATE_FAIL,
                    payload: error
                });
            });
    };
}