import {NETWORK_CREATE_FAIL, NETWORK_CREATE_SUCCESS} from "../constants/Network";

const initialState = {
    errors: []
};

export default function networkCreate(state = initialState, action) {
    switch (action.type) {
        case NETWORK_CREATE_SUCCESS:
            return {...state, errors: [], ...action.payload};
        case NETWORK_CREATE_FAIL:
            return {...state, ...action.payload};
        default:
            return state;
    }
}