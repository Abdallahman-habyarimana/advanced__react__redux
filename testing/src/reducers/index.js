import { combineReducers } from 'redux'
import { AuthReducer } from './auth';
import { commentReducer } from './comment';

export default combineReducers({
    comments: commentReducer,
    auth: AuthReducer
})
