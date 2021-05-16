import { CHANGE__AUTH } from "../actions/types";

export const AuthReducer = (state = false, action) => {
    switch (action.type) {
        case CHANGE__AUTH:
            return action.payload
        default:
            return state;
    }
}