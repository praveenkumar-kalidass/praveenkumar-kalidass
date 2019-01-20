import React, {Component} from "react";
import Header from "../Header";
import "./style.scss";

export default class extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        My App
      </div>
    );
  }
}
