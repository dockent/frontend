import {NETWORK_LIST_SUCCESS} from "../constants/Network";

const initialState = {};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {{}}
 */
export default function networkList(state = initialState, action) {
    switch (action.type) {
        case NETWORK_LIST_SUCCESS:
            return {...action.payload};
        default:
            return state;
    }
}