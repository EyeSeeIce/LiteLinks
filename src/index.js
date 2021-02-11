import React from 'react';
import {render, hydrate} from 'react-dom';
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
window.addEventListener("beforeunload", () => {
    // Production code would also be considerate of localStorage size limitations
    // and would do a LRU cache eviction to maintain sanity on storage.
    // There should also be a way to clear this data when the user signs out
    window.localStorage.setItem(
        `lastKnown_${window.location.href}`,
        JSON.stringify({
            conditions: {
                userId: "<User ID>",
                buildNo: "<Build No.>"
            },
            data: document.getElementById("root").innerHTML
        })
    );
});

const app = () => {
    return <Provider store={store}>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </Provider>
}

if (window.hasRestoredState) {
    hydrate(app(), document.getElementById('root'));
} else {
    render(app(), document.getElementById('root'));
}
/*render(
    app(),
    document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
