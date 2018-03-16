import {Network} from "../../providers/UrlProvider";
import {NETWORK_INSPECT_FAIL, NETWORK_INSPECT_REQUEST, NETWORK_INSPECT_SUCCESS} from "../../constants/Network";
import {ERROR_404_HANDLER} from "../../constants/HttpStatusCodeHandler";

/**
 * @param {int} id
 * @returns {function(*=)}
 */
export function inspectNetwork(id) {
    return (dispatch) => {
        dispatch({type: NETWORK_INSPECT_REQUEST, payload: id});
        fetch(Network.inspect(id))
            .then((response) => {
                if (response.status === 404) {
                    dispatch({type: ERROR_404_HANDLER});
                } else {
                    response.json()
                        .then((data) => {
                            dispatch({
                                type: NETWORK_INSPECT_SUCCESS,
                                payload: data
                            });
                        });
                }
            })
            .catch((error) => {
                dispatch({
                    type: NETWORK_INSPECT_FAIL,
                    payload: error
                });
            });
    };
}