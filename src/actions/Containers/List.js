import {
    CONTAINERS_LIST_REQUEST, CONTAINERS_LIST_FAIL,
    CONTAINERS_LIST_SUCCESS, CONTAINERS_START_REQUEST, CONTAINERS_START_FAIL, CONTAINERS_START_SUCCESS
} from "../../constants/Containers";
import {Containers} from "../../providers/UrlProvider";
import _ from 'lodash';

export function requestData() {
    return (dispatch) => {
        dispatch({type: CONTAINERS_LIST_REQUEST});
        fetch(Containers.list)
            .then((response) => {
                response.json()
                    .then((data) => {
                        dispatch({
                            type: CONTAINERS_LIST_SUCCESS,
                            payload: data
                        });
                    });
            })
            .catch((error) => {
                dispatch({
                    type: CONTAINERS_LIST_FAIL,
                    payload: error
                });
            });
    };
}

export function startContainers(selected) {
    return (dispatch) => {
        dispatch({type: CONTAINERS_START_REQUEST, payload: selected});
        fetch(Containers.start, {
            method: 'POST',
            body: {
                id: _.map(selected, (value) => (value.Id))
            }
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        dispatch({
                            type: CONTAINERS_START_SUCCESS,
                            payload: data
                        });
                    });
            })
            .catch((error) => {
                dispatch({
                    type: CONTAINERS_START_FAIL,
                    payload: error
                });
            })
    };
}