import {BUILDER_SUBMIT_FAIL, BUILDER_SUBMIT_SUCCESS} from "../constants/Builder";

const initialState = {
    errors: []
};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function builder(state = initialState, action) {
    switch (action.type) {
        case BUILDER_SUBMIT_SUCCESS:
            return {...state, errors: [], ...action.payload};
        case BUILDER_SUBMIT_FAIL:
            return {...state, ...action.payload};
        default:
            return state;
    }
}