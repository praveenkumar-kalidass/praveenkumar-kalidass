import React, {Component} from "react";
import {
  Grid,
  Header,
  Image
} from "semantic-ui-react";
import HomePicture from "../../Assets/Images/home-picture.JPG";
import "./style.scss";

export default class extends Component {
  render() {
    return (
      <div className="ui-home">
        <Grid verticalAlign="middle" padded
          className="home-grid">
          <Grid.Row className="padding-0">
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Grid centered>
                <Grid.Column computer={10} tablet={16} mobile={16}>
                  <Header className="title-label" size="huge">Hey, I'm</Header>
                  <Header className="title-name" size="huge">Praveenkumar <br/>Kalidass</Header>
                  <Header className="title-designation">Software Engineer</Header>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}
              className="home-image-container padding-0">
              <Image className="home-image" src={HomePicture} fluid />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
