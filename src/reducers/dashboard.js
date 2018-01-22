import {DASHBOARD_REQUEST} from "../constants/Dashboard";

const initialState = {};

export default function dashboardstate(state = initialState, action) {
    switch (action.type) {
        case DASHBOARD_REQUEST:
            return {};
        default:
            return state;
    }
}