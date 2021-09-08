import "./index.scss";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./reducers";
import reactDom from "react-dom";

reactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)