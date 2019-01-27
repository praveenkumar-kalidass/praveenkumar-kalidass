import React from "react";
import {HashRouter, Route} from "react-router-dom";
import App from "./Components/App";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Skills from "./Components/Skills";

export default () => (
  <HashRouter>
    <App>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/work" component={Work}></Route>
      <Route path="/skills" component={Skills}></Route>
    </App>
  </HashRouter>
);
