import {NETWORK_INSPECT_SUCCESS} from "../constants/Network";

const initialState = {
    model: {
        Name: ''
    }
};

export default function networkInspect(state = initialState, action) {
    switch (action.type) {
        case NETWORK_INSPECT_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}