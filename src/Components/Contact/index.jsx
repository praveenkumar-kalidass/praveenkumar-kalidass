import React, {Component} from "react";
import {
  Button,
  Form,
  Grid,
  Label,
  Icon,
  Image,
  Input,
  TextArea
} from "semantic-ui-react";
import {
  init as EmailInit,
  send as EmailSend
} from "emailjs-com";
import DisplayPicture from "../../Assets/Images/display-picture.png";
import "./style.scss";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      sent: false
    };
  }

  componentDidMount() {
    EmailInit("user_UTwMgKiQQRCc4q7RRqDqi");
  }

  handleFieldChange = (event, field) => {
    this.setState({
      [field]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    EmailSend(
      "gmail",
      "praveen_portfolio",
      {
        from_name: this.state.name,
        from_email: this.state.email,
        message_html: "<p>" + this.state.message + "</p>"
      }
    );
    this.setState({
      sent: true
    });
    setTimeout(() => {
      this.setState({
        name: "",
        email: "",
        message: "",
        sent: false
      });
    }, 3000);
  }

  render() {
    const {
      name,
      email,
      message,
      sent
    } = this.state;

    return (
      <div className="ui-contact">
        <Grid verticalAlign="middle" padded centered className="contact-grid">
          <Grid.Row className="padding-0">
            <Grid.Column mobile={16} tablet={12} computer={8}>
              <Form onSubmit={this.handleSubmit}>
                <Grid columns={1}>
                  <Grid.Column>
                    <Image src={DisplayPicture} size="tiny" circular />
                  </Grid.Column>
                  <Grid.Column>
                    <Input className="contact-input"
                      icon="user" iconPosition="left"
                      placeholder="Your name"
                      required
                      value={name}
                      onChange={(event) => this.handleFieldChange(event, "name")} />
                  </Grid.Column>
                  <Grid.Column>
                    <Input className="contact-input"
                      icon="mail" iconPosition="left"
                      type="email"
                      placeholder="Your email"
                      required
                      value={email}
                      onChange={(event) => this.handleFieldChange(event, "email")} />
                  </Grid.Column>
                  <Grid.Column>
                    <TextArea className="contact-text"
                      placeholder="Your message here..."
                      required
                      value={message}
                      onChange={(event) => this.handleFieldChange(event, "message")} />
                  </Grid.Column>
                  <Grid.Column>
                    {
                      sent &&
                      <Label as="a" className="sent-label">
                        Your message is sent!!!
                      </Label>
                    }
                    <Button type="submit" className="send-button">
                      Send
                    </Button>
                  </Grid.Column>
                </Grid>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
