import { FETCH__COMMENT, SAVE__COMMENT } from '../actions/types';

export const commentReducer = (state = [], action) => {
    switch (action.type) {
        case SAVE__COMMENT:
            return [...state, action.payload, {}]
        case FETCH__COMMENT:
           const comments = action.payload.data.map(comment => comment.name)
           return [...state, ...comments]
        default:
            return state
    }
}