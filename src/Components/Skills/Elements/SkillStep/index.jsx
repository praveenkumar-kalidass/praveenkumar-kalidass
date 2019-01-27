import React, {Component} from "react";
import {Step} from "semantic-ui-react";
import "./style.scss";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [{
        name: "Programmimg Languages"
      }, {
        name: "Frontend Libraries"
      }, {
        name: "Visualization"
      }, {
        name: "Backend Libraries"
      }, {
        name: "Adaptive Frameworks"
      }, {
        name: "Databases"
      }, {
        name: "Test Frameworks"
      }, {
        name: "Code Maintainance"
      }],
      skill: "Programmimg Languages"
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      skill: nextProps.skill
    });
  }

  handleSkillChange = (skill) => {
    this.props.handleSkillChange(skill);
  }

  render() {
    const {
      skills,
      skill
    } = this.state;

    return (
      <div className="ui-skill-step">
        <Step.Group vertical>
          {
            skills.map((sk, index) => (
              <Step key={index} active={skill === sk.name}
                onClick={(event) => this.handleSkillChange(sk.name)}>
                <Step.Content>
                  <Step.Title>{sk.name}</Step.Title>
                </Step.Content>
              </Step>
            ))
          }
        </Step.Group>
      </div>
    );
  }
}
