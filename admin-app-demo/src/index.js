import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, createStore } from 'redux'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './main/reducers'
import AuthOrApp from './main/authOrApp';

const store = applyMiddleware(multi,thunk,promise)(createStore)(reducers)
ReactDOM.render(
    <Provider store={store} >
        <AuthOrApp/>
    </Provider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
