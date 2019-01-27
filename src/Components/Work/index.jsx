import React, {Component} from "react";
import {
  Card,
  Grid,
  Icon,
  Image
} from "semantic-ui-react";
import Ideas2IT from "../../Assets/Images/ideas2it.jpg";
import Pipecandy from "../../Assets/Images/pipecandy.png";
import Siemens from "../../Assets/Images/siemens.png";
import "./style.scss";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [{
        image: Ideas2IT,
        name: "Ideas2IT Tech Pvt. Ltd.",
        place: "Chennai",
        designation: "Software Engineer",
        period: "2016 to present"
      }, {
        image: Pipecandy,
        name: "Pipecandy Pvt. Ltd.",
        place: "Chennai",
        designation: "Software Engineer",
        period: "2016"
      }, {
        image: Siemens,
        name: "Siemens Tech Pvt. Ltd.",
        place: "Chennai",
        designation: "Business Partner",
        period: "2017 to present"
      }]
    };
  }
  render() {
    const {companies} = this.state;

    return (
      <div className="ui-work">
        <Grid verticalAlign="middle" padded centered className="work-grid">
          <Grid.Row className="padding-0">
            <Grid.Column mobile={16} tablet={14} computer={10}>
              <Grid centered>
                {
                  companies.map((company, index) => (
                    <Grid.Column key={index} mobile={12} tablet={5} computer={5}
                      className="center-grid">
                      <Card>
                        <Image className="company-image" src={company.image} />
                        <Card.Content>
                          <Card.Header>{company.name}</Card.Header>
                          <Card.Meta>
                            <span>{company.place}</span>
                          </Card.Meta>
                          <Card.Description>{company.designation}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <a>{company.period}</a>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  ))
                }
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
