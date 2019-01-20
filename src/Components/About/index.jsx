import React, {Component} from "react";
import {
  Button,
  Grid,
  Header,
  Image,
  Icon
} from "semantic-ui-react";
import HomePicture from "../../Assets/Images/home-picture.JPG";
import Resume from "../../Assets/Documents/Praveen.pdf";
import "./style.scss";

export default class extends Component {
  render() {
    return (
      <div className="ui-about">
        <Grid verticalAlign="middle" padded
          className="about-grid">
          <Grid.Row className="padding-0">
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Grid centered>
                <Grid.Column computer={12} tablet={16} mobile={16}>
                  <Header as="h4">
                    Experienced Software Engineer with a demonstrated history
                    of working in the Information technology and
                    Services industry.
                  </Header>
                  <Header as="h4">
                    Specialized in Front-end development, developed web
                    interface controls using Javascript, AngularJS, ReactJS and
                    Services using NodeJS, Java.
                  </Header>
                  <Header as="h4">
                    Born : 26 June 1994
                  </Header>
                  <Header as="h4">
                    Years of experience : 3
                  </Header>
                  <Header as="h4">
                    Languages : Tamil, English, Hindi
                  </Header>
                  <Button animated="fade" className="download-button">
                    <Button.Content visible>Download Resume</Button.Content>
                    <Button.Content hidden>
                      <a className="download-link"
                        href={Resume} download="praveen">
                        <Icon className="download-icon" name="download"></Icon>
                      </a>
                    </Button.Content>
                  </Button>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}
              className="about-image-container padding-0">
              <Image className="about-image" src={HomePicture} fluid />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
