import {CONTAINER_CREATE_FAIL, CONTAINER_CREATE_REQUEST, CONTAINER_CREATE_SUCCESS} from "../../constants/Containers";
import {Containers} from "../../providers/UrlProvider";

export function createContainer(data) {
    return (dispatch) => {
        dispatch({type: CONTAINER_CREATE_REQUEST});
        fetch(Containers.create, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then((response) => {
                response.json()
                    .then((data) => {

                        dispatch({
                            type: CONTAINER_CREATE_SUCCESS,
                            payload: data
                        });
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