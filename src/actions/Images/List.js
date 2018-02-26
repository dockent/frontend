import {Images} from "../../providers/UrlProvider";
import {
    IMAGE_FORCE_REMOVE_FAIL,
    IMAGE_FORCE_REMOVE_REQUEST, IMAGE_FORCE_REMOVE_SUCCESS,
    IMAGE_REMOVE_FAIL,
    IMAGE_REMOVE_REQUEST, IMAGE_REMOVE_SUCCESS, IMAGES_LIST_FAIL, IMAGES_LIST_REQUEST,
    IMAGES_LIST_SUCCESS
} from "../../constants/Images";
import _ from 'lodash';
import {notify} from "react-notify-toast";

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

/**
 * @param {Object[]} selected
 * @returns {function(*=)}
 */
export function removeImages(selected) {
    return (dispatch) => {
        dispatch({type: IMAGE_REMOVE_REQUEST, payload: selected});
        fetch(Images.remove, {
            method: 'POST',
            body: JSON.stringify({
                id: _.map(selected, (value) => (value.Id))
            })
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        notify.show('Images removed', 'success');
                        dispatch({
                            type: IMAGE_REMOVE_SUCCESS,
                            payload: data
                        });
                        requestData();
                    });
            })
            .catch((error) => {
                notify.show(error, 'error');
                dispatch({
                    type: IMAGE_REMOVE_FAIL,
                    payload: error
                });
            });
    };
}

/**
 * @param {Object[]} selected
 * @returns {function(*=)}
 */
export function forceRemoveImages(selected) {
    return (dispatch) => {
        dispatch({type: IMAGE_FORCE_REMOVE_REQUEST, payload: selected});
        fetch(Images.forceRemove, {
            method: 'POST',
            body: JSON.stringify({
                id: _.map(selected, (value) => (value.Id))
            })
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        notify.show('Images removed', 'success');
                        dispatch({
                            type: IMAGE_FORCE_REMOVE_SUCCESS,
                            payload: data
                        });
                        requestData();
                    });
            })
            .catch((error) => {
                notify.show(error, 'error');
                dispatch({
                    type: IMAGE_FORCE_REMOVE_FAIL,
                    payload: error
                });
            });
    };
}