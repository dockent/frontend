import {
    CONTAINERS_LIST_REQUEST, CONTAINERS_LIST_FAIL,
    CONTAINERS_LIST_SUCCESS, CONTAINERS_START_REQUEST, CONTAINERS_START_FAIL, CONTAINERS_START_SUCCESS,
    CONTAINERS_RESTART_REQUEST, CONTAINERS_RESTART_SUCCESS, CONTAINERS_RESTART_FAIL, CONTAINERS_STOP_REQUEST,
    CONTAINERS_STOP_SUCCESS, CONTAINERS_STOP_FAIL, CONTAINERS_REMOVE_REQUEST, CONTAINERS_REMOVE_SUCCESS,
    CONTAINERS_REMOVE_FAIL
} from "../../constants/Containers";
import {Containers} from "../../providers/UrlProvider";
import _ from 'lodash';
import {notify} from "react-notify-toast";

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
            body: JSON.stringify({
                id: _.map(selected, (value) => (value.Id))
            })
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        notify.show('Containers started!', 'success');
                        dispatch({
                            type: CONTAINERS_START_SUCCESS,
                            payload: data
                        });
                    });
            })
            .catch((error) => {
                notify.show(error, 'error');
                dispatch({
                    type: CONTAINERS_START_FAIL,
                    payload: error
                });
            });
    };
}

export function restartContainers(selected) {
    return (dispatch) => {
        dispatch({type: CONTAINERS_RESTART_REQUEST, payload: selected});
        fetch(Containers.restart, {
            method: 'POST',
            body: JSON.stringify({
                id: _.map(selected, (value) => (value.Id))
            })
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        notify.show(data.message, 'success');
                        dispatch({
                            type: CONTAINERS_RESTART_SUCCESS,
                            payload: data
                        });
                    });
            })
            .catch((error) => {
                notify.show(error, 'error');
                dispatch({
                    type: CONTAINERS_RESTART_FAIL,
                    payload: error
                });
            });
    };
}

export function editContainer(selected) {
    return (dispatch) => {
        
    };
}

export function stopContainers(selected) {
    return (dispatch) => {
        dispatch({type: CONTAINERS_STOP_REQUEST, payload: selected});
        fetch(Containers.stop, {
            method: 'POST',
            body: JSON.stringify({
                id: _.map(selected, (value) => (value.Id))
            })
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        notify.show(data.message, 'success');
                        dispatch({
                            type: CONTAINERS_STOP_SUCCESS,
                            payload: data
                        });
                    });
            })
            .catch((error) => {
                notify.show(error, 'error');
                dispatch({
                    type: CONTAINERS_STOP_FAIL,
                    payload: error
                });
            });
    };
}

export function removeContainers(selected) {
    return (dispatch) => {
        dispatch({type: CONTAINERS_REMOVE_REQUEST, payload: selected});
        fetch(Containers.remove, {
            method: 'POST',
            body: JSON.stringify({
                id: _.map(selected, (value) => (value.Id))
            })
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        notify.show('Containers removed!', 'success');
                        dispatch({
                            type: CONTAINERS_REMOVE_SUCCESS,
                            payload: data
                        });
                    });
            })
            .catch((error) => {
                notify.show(error, 'error');
                dispatch({
                    type: CONTAINERS_REMOVE_FAIL,
                    payload: error
                });
            });
    };
}