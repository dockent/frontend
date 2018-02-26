import {IMAGES_LIST_SUCCESS} from "../constants/Images";

const initialState = {};

export default function imagesList(state = initialState, action) {
    switch (action.type) {
        case IMAGES_LIST_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}