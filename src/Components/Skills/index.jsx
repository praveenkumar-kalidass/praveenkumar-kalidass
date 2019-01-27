import React, {Component} from "react";
import {
  Grid,
  Dropdown,
  Step
} from "semantic-ui-react";
import SkillStep from "./Elements/SkillStep";
import Statistic from "./Elements/Statistic";
import "./style.scss";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: "Programmimg Languages",
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
      }]
    };
  }

  handleSkillChange = (skill) => {
    this.setState({skill});
  }

  render() {
    const {
      skill
    } = this.state;
    const skills = this.state.skills.map((sk) => ({
      value: sk.name,
      text: sk.name
    }));

    return (
      <div className="ui-skills">
        <Grid verticalAlign="middle" padded className="skills-grid" centered>
          <Grid.Row className="padding-0">
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Grid>
                <Grid.Column floated="right" only="mobile">
                  <Dropdown
                    onChange={(event, object) => this.handleSkillChange(object.value)}
                    className="skill-dropdown"
                    placeholder="Select a skill"
                    options={skills}
                    value={skill} />
                </Grid.Column>
              </Grid>
              <Statistic
                skill={skill}/>
            </Grid.Column>
            <Grid.Column tablet={4} computer={4}
              only="tablet computer">
              <SkillStep
                skill={skill}
                handleSkillChange={this.handleSkillChange} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
