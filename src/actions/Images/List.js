import {Images} from "../../providers/UrlProvider";
import {IMAGES_LIST_FAIL, IMAGES_LIST_REQUEST, IMAGES_LIST_SUCCESS} from "../../constants/Images";

/**
 * @returns {function(*=)}
 */
export function requestData() {
    return (dispatch) => {
        dispatch({type: IMAGES_LIST_REQUEST});
        fetch(Images.list)
            .then((response) => {
                response.json()
                    .then((data) => {
                        dispatch({
                            type: IMAGES_LIST_SUCCESS,
                            payload: data
                        });
                    });
            })
            .catch((error) => {
                dispatch({
                    type: IMAGES_LIST_FAIL,
                    payload: error
                });
            });
    };
}