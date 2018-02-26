import {CONTAINER_INSPECT_FAIL, CONTAINER_INSPECT_REQUEST, CONTAINER_INSPECT_SUCCESS} from "../../constants/Containers";
import {Containers} from "../../providers/UrlProvider";

/**
 * @param {int} id
 * @returns {function(*=)}
 */
export function inspectContainer(id) {
    return (dispatch) => {
        dispatch({type: CONTAINER_INSPECT_REQUEST, payload: id});
        fetch(Containers.inspect(id))
            .then((response) => {
                response.json()
                    .then((data) => {
                        dispatch({
                            type: CONTAINER_INSPECT_SUCCESS,
                            payload: data
                        });
                    });
            })
            .catch((error) => {
                dispatch({
                    type: CONTAINER_INSPECT_FAIL,
                    payload: error
                });
            });
    };
}