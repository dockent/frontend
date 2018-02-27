import {BUILDER_SUBMIT_FAIL, BUILDER_SUBMIT_SUCCESS} from "../constants/Builder";

const initialState = {
    errors: []
};

export default function builder(state = initialState, action) {
    switch (action.type) {
        case BUILDER_SUBMIT_SUCCESS:
        case BUILDER_SUBMIT_FAIL:
            return {...state, ...action.payload};
        default:
            return state;
    }
}