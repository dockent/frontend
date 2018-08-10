import {NOTIFICATIONS_GET_UNREAD_COUNT_SUCCESS} from "../constants/Notifications";

const initialState = {
    count: 0
};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {{}}
 */
export default function notificationsCount(state = initialState, action) {
    switch (action.type) {
        case NOTIFICATIONS_GET_UNREAD_COUNT_SUCCESS:
            return {...action.payload};
        default:
            return state;
    }
}