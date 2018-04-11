import {
    IMAGE_BUILD_BY_DOCKERFILE_BODY_FAIL,
    IMAGE_BUILD_BY_DOCKERFILE_BODY_REQUEST, IMAGE_BUILD_BY_DOCKERFILE_BODY_SUCCESS,
    IMAGE_BUILD_BY_DOCKERFILE_PATH_FAIL, IMAGE_BUILD_BY_DOCKERFILE_PATH_REQUEST,
    IMAGE_BUILD_BY_DOCKERFILE_PATH_SUCCESS
} from "../../constants/Images";
import {Images} from "../../providers/UrlProvider";
import {notify} from "react-notify-toast";
import {ROUTING} from "../../constants/Routing";

/**
 * @param {string} path
 * @returns {function(*=)}
 */
export function buildByDockerfilePath(path) {
    return (dispatch) => {
        dispatch({type: IMAGE_BUILD_BY_DOCKERFILE_PATH_REQUEST});
        fetch(Images.buildByDockerfilePath, {
            method: 'POST',
            body: JSON.stringify({
                dockerfilePath: path
            })
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        switch (data.status) {
                            case 'success':
                                dispatch({
                                    type: IMAGE_BUILD_BY_DOCKERFILE_PATH_SUCCESS,
                                    payload: data
                                });
                                notify.show(data.message, 'success');
                                dispatch({
                                    type: ROUTING,
                                    payload: {url: '/images'}
                                });
                                break;
                            default:
                            case 'error':
                                dispatch({
                                    type: IMAGE_BUILD_BY_DOCKERFILE_PATH_FAIL,
                                    payload: data
                                });
                                break;
                        }
                    });
            })
            .catch((error) => {
                dispatch({
                    type: IMAGE_BUILD_BY_DOCKERFILE_PATH_FAIL,
                    payload: error
                });
            });
    };
}

/**
 * @param {string} body
 * @returns {function(*=)}
 */
export function buildByDockerfileBody(body) {
    return (dispatch) => {
        dispatch({type: IMAGE_BUILD_BY_DOCKERFILE_BODY_REQUEST});
        fetch(Images.buildByDockerfileBody, {
            method: 'POST',
            body: JSON.stringify({
                dockerfileBody: body
            })
        })
            .then((response) => {
                response.json()
                    .then((data) => {
                        switch (data.status) {
                            case 'success':
                                dispatch({
                                    type: IMAGE_BUILD_BY_DOCKERFILE_BODY_SUCCESS,
                                    payload: data
                                });
                                notify.show(data.message, 'success');
                                dispatch({
                                    type: ROUTING,
                                    payload: {url: '/images'}
                                });
                                break;
                            default:
                            case 'error':
                                dispatch({
                                    type: IMAGE_BUILD_BY_DOCKERFILE_BODY_FAIL,
                                    payload: data
                                });
                                break;
                        }
                    });
            })
            .catch((error) => {
                dispatch({
                    type: IMAGE_BUILD_BY_DOCKERFILE_BODY_FAIL,
                    payload: error
                });
            });
    };
}