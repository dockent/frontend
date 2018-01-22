import {DASHBOARD_REQUEST} from "../constants/Dashboard";

export function requestData(payload) {
    return (dispatch) => {
        dispatch({type: DASHBOARD_REQUEST});
    };
}