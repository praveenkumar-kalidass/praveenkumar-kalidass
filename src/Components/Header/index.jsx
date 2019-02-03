import React, {Component} from "react";
import {
  Header,
  Menu
} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import "./style.scss";

export default class extends Component {
  render() {
    return (
      <div className="ui-header">
        <Header as="h1">
          <NavLink className="header" to="/">Praveenkumar</NavLink>
        </Header>
        <Menu text>
          <Menu.Item>
            <NavLink className="link" to="/about">About</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink className="link" to="/work">Work</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink className="link" exact to="/skills">Skills</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink className="link" exact to="/">Contact</NavLink>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
