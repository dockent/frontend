import {CONTAINER_INSPECT_SUCCESS} from "../constants/Containers";

const initialState = {
    model: {
        Name: ''
    },
    top: null
};

export default function containerInspect(state = initialState, action) {
    switch (action.type) {
        case CONTAINER_INSPECT_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}