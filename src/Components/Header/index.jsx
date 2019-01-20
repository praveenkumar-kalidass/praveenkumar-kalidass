import React, {Component} from "react";
import {
  Header,
  Menu
} from "semantic-ui-react";
import "./style.scss";

export default class extends Component {
  render() {
    return (
      <div className="ui-header">
        <Header as="h1">Praveenkumar Kalidass</Header>
        <Menu text>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Work</Menu.Item>
          <Menu.Item>Skills</Menu.Item>
          <Menu.Item>Accomplishments</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
        </Menu>
      </div>
    );
  }
}
