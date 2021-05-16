import axios from 'axios';
import { CHANGE__AUTH, FETCH__COMMENT, SAVE__COMMENT } from './types';

export function saveComment(comment) {
    return {
        type: SAVE__COMMENT,
        payload: comment
    }
}

export function fetchComment() {
    const response = axios.get('http://jsonplaceholder.typicode.com/comments')
    return {
        type: FETCH__COMMENT,
        payload: response
    }
}

export function changeAuth(isLoggedIn) {
    
    return {
        type: CHANGE__AUTH,
        payload: isLoggedIn
    }
}
