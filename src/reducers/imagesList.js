import {IMAGES_LIST_SUCCESS} from "../constants/Images";

const initialState = {};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {{}}
 */
export default function imagesList(state = initialState, action) {
    switch (action.type) {
        case IMAGES_LIST_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}