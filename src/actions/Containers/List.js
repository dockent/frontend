import {
    CONTAINERS_LIST_REQUEST, CONTAINERS_LIST_REQUEST_FAIL,
    CONTAINERS_LIST_REQUEST_SUCCESS
} from "../../constants/Containers";
import {Containers} from "../../providers/UrlProvider";

export function requestData() {
    return (dispatch) => {
        dispatch({type: CONTAINERS_LIST_REQUEST});
        fetch(Containers.list)
            .then((response) => {
                response.json()
                    .then((data) => {
                        dispatch({
                            type: CONTAINERS_LIST_REQUEST_SUCCESS,
                            payload: data
                        });
                    });
            })
            .catch((error) => {
                dispatch({
                    type: CONTAINERS_LIST_REQUEST_FAIL,
                    payload: error
                });
            });
    };
}