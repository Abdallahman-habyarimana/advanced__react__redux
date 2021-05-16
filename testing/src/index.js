import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Root from './Root'

import App from './components/App';
import './index.css'

ReactDOM.render( 
    <Root>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Root>,
    document.querySelector('#root')
    )