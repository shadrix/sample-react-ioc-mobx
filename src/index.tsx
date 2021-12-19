import 'reflect-metadata';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

import "./styles.scss";

import { configure } from "mobx"

configure({
    enforceActions: "never",
})


ReactDOM.render(<App/>, document.getElementById('root'));