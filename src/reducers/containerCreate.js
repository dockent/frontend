import {CONTAINER_CREATE_FAIL, CONTAINER_CREATE_SUCCESS} from "../constants/Containers";

const initialState = {
    errors: []
};

export default function containerCreate(state = initialState, action) {
    switch (action.type) {
        case CONTAINER_CREATE_SUCCESS:
        case CONTAINER_CREATE_FAIL:
            return {...state, ...action.payload};
        default:
            return state;
    }
}