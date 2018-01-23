import {DASHBOARD_REQUEST, DASHBOARD_REQUEST_FAIL, DASHBOARD_REQUEST_SUCCESS} from "../constants/Dashboard";
import {Dashboard} from "../providers/UrlProvider";

export function requestData() {
    return (dispatch) => {
        dispatch({type: DASHBOARD_REQUEST});
        fetch(Dashboard.url)
            .then((response) => {
                response.json()
                    .then((data) => {
                        dispatch({
                            type: DASHBOARD_REQUEST_SUCCESS,
                            payload: data
                        });
                    });
            })
            .catch((error) => {
                dispatch({
                    type: DASHBOARD_REQUEST_FAIL,
                    payload: error
                });
            });
    };
}