import {Network} from "../../providers/UrlProvider";
import {NETWORK_INSPECT_FAIL, NETWORK_INSPECT_REQUEST, NETWORK_INSPECT_SUCCESS} from "../../constants/Network";

/**
 * @param {int} id
 * @returns {function(*=)}
 */
export function inspectNetwork(id) {
    return (dispatch) => {
        dispatch({type: NETWORK_INSPECT_REQUEST, payload: id});
        fetch(Network.inspect(id))
            .then((response) => {
                response.json()
                    .then((data) => {
                        dispatch({
                            type: NETWORK_INSPECT_SUCCESS,
                            payload: data
                        });
                    });
            })
            .catch((error) => {
                dispatch({
                    type: NETWORK_INSPECT_FAIL,
                    payload: error
                });
            });
    };
}