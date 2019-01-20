import React, {Component} from "react";
import {HashRouter, Route} from "react-router-dom";
import Header from "../Header";
import Home from "../Home";
import "./style.scss";

export default class extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <HashRouter>
          <Route path="/" component={Home}></Route>
        </HashRouter>
      </div>
    );
  }
}
