import {
    IMAGE_BUILD_BY_DOCKERFILE_BODY_FAIL,
    IMAGE_BUILD_BY_DOCKERFILE_BODY_SUCCESS, IMAGE_BUILD_BY_DOCKERFILE_PATH_FAIL,
    IMAGE_BUILD_BY_DOCKERFILE_PATH_SUCCESS
} from "../constants/Images";

const initialState = {
    errors: {}
};

export default function imageBuild(state = initialState, action) {
    switch (action.type) {
        case IMAGE_BUILD_BY_DOCKERFILE_PATH_SUCCESS:
        case IMAGE_BUILD_BY_DOCKERFILE_BODY_SUCCESS:
            return {...state, errors: {}, ...action.payload};
        case IMAGE_BUILD_BY_DOCKERFILE_PATH_FAIL:
        case IMAGE_BUILD_BY_DOCKERFILE_BODY_FAIL:
            return {...state, ...action.payload};
        default:
            return state;
    }
}