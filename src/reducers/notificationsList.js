import {NOTIFICATIONS_LIST_SUCCESS} from "../constants/Notifications";

const initialState = {};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function notificationsList(state = initialState, action) {
    switch (action.type) {
        case NOTIFICATIONS_LIST_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}