import {CONTAINERS_LIST_SUCCESS} from "../constants/Containers";

const initialState = {};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function containersList(state = initialState, action) {
    switch (action.type) {
        case CONTAINERS_LIST_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}