import {
    SETTINGS_GET_FAIL, SETTINGS_GET_SUCCESS, SETTINGS_SAVE_FAIL,
    SETTINGS_SAVE_SUCCESS
} from "../constants/Settings";

const initialState = {
    errors: [],
    model: {}
};

export default function settings(state = initialState, action) {
    switch (action.type) {
        case SETTINGS_SAVE_SUCCESS:
            return {...state, errors: [], ...action.payload};
        case SETTINGS_SAVE_FAIL:
        case SETTINGS_GET_SUCCESS:
        case SETTINGS_GET_FAIL:
            return {...state, ...action.payload};
        default:
            return state;
    }
}