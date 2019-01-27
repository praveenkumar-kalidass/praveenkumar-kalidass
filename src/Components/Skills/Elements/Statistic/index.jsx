import React, {Component} from "react";
import {
  Rating,
  Statistic
} from "semantic-ui-react";
import "./style.scss";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: "Programmimg Languages",
      skills: {
        "Programmimg Languages": [{
          name: "HTML",
          rating: 5
        }, {
          name: "CSS",
          rating: 5
        }, {
          name: "Javascript",
          rating: 4
        }, {
          name: "Typescript",
          rating: 3
        }, {
          name: "Java",
          rating: 2
        }, {
          name: "Python",
          rating: 2
        }],
        "Frontend Libraries": [{
          name: "React.js",
          rating: 4
        }, {
          name: "Angular.js",
          rating: 4
        }, {
          name: "Angular",
          rating: 3
        }, {
          name: "JQuery",
          rating: 5
        }],
        "Visualization": [{
          name: "SVG",
          rating: 4
        }, {
          name: "D3.js",
          rating: 3
        }, {
          name: "Material",
          rating: 4
        }, {
          name: "Bootstrap",
          rating: 3
        }],
        "Backend Libraries": [{
          name: "Node.js",
          rating: 4
        }, {
          name: "Servlet",
          rating: 2
        }],
        "Adaptive Frameworks": [{
          name: "Express",
          rating: 4
        }, {
          name: "Sequelize",
          rating: 4
        }, {
          name: "Loopback",
          rating: 3
        }, {
          name: "Hibernate",
          rating: 2
        }],
        "Databases": [{
          name: "Mysql",
          rating: 3
        }, {
          name: "SQL Server",
          rating: 3
        }, {
          name: "Postgresql",
          rating: 3
        }],
        "Test Frameworks": [{
          name: "Jasmine",
          rating: 2
        }, {
          name: "Mocha",
          rating: 4
        }, {
          name: "Chai",
          rating: 4
        }, {
          name: "Jest",
          rating: 4
        }],
        "Code Maintainance": [{
          name: "Git",
          rating: 5
        }, {
          name: "Lint",
          rating: 4
        }],
        "Operating Systems": [{
          name: "Ubuntu",
          rating: 4
        }, {
          name: "Windows",
          rating: 4
        }]
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      skill: nextProps.skill
    });
  }

  render() {
    const {
      skill,
      skills
    } = this.state;

    return (
      <div className="ui-statistic">
        <Statistic.Group size="tiny">
          {
            skills[skill].map((lang, index) => (
              <Statistic key={index}>
                <Statistic.Value>{lang.name}</Statistic.Value>
                <Statistic.Label>
                  <Rating icon="star"
                    defaultRating={lang.rating}
                    maxRating={5} />
                </Statistic.Label>
              </Statistic>
            ))
          }
        </Statistic.Group>
      </div>
    );
  }
}
