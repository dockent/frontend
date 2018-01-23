import {DASHBOARD_REQUEST_SUCCESS} from "../constants/Dashboard";

const initialState = {};

export default function dashboard(state = initialState, action) {
    switch (action.type) {
        case DASHBOARD_REQUEST_SUCCESS:
            return {...state, payload: action.payload};
        default:
            return state;
    }
}