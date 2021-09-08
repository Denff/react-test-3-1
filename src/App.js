import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Main from "./components/Main/Main";

const App = () => {

    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/" component={Main}/>
            </div>
        </BrowserRouter>
    );
};

export default App;