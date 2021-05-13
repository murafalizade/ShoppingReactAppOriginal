import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import {reducer} from "./redux/reducers/index";
import thunk from "redux-thunk";
import App from "./App";
import ErrorBoundary from "./errorBundigle";

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <App />

        </ErrorBoundary>
    </Provider>, document.getElementById("root"));