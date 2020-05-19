import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

const middlewares = [thunk];
const store = createStore(rootReducer, composeWithDevTools(), applyMiddleware(...middlewares));
store.subscribe(() => console.log("store", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
