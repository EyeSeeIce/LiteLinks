import React from 'react';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {BrowserRouter, browserHistory} from "react-router-dom";
import './index.css'
import './themes.css'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk)
))

const app = () => {
    return <Provider store={store}>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </Provider>
}

render(
    app(),
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
