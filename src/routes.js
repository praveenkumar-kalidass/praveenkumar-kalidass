import React from "react";
import {HashRouter, Route} from "react-router-dom";
import App from "./Components/App";
import Home from "./Components/Home";
import About from "./Components/About";

export default () => (
  <HashRouter>
    <App>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </App>
  </HashRouter>
);
