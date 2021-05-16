import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
//import reduxPromise from 'redux-promise'
import async from './middleware/async';
import stateValidator from './middleware/stateValidator';

import reducers from './reducers/index'

export default function Root ({ children, initialState = {} }) {
    
    const store = createStore(
        reducers, 
        initialState, 
        applyMiddleware(async, stateValidator)
    );
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}