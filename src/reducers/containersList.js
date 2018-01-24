import {CONTAINERS_LIST_REQUEST_SUCCESS} from "../constants/Containers";

const initialState = {};

export default function containersList(state = initialState, action) {
    switch (action.type) {
        case CONTAINERS_LIST_REQUEST_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}