import React, { Component } from 'react';
import {
  Col,
  Grid,
  PageHeader,
  Row,
  FormGroup,
  FormControl,
  HelpBlock,
  ControlLabel,
  Button
} from 'react-bootstrap'


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      validation: null
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    this.props.onSubmit(this.state.form)
  }

  handleChange(e) {
    const formState = Object.assign({}, this.state.form)
    formState[e.target.name] = e.target.value
    this.setState({ form: formState })
  }

  render() {
    const { validation, form } = this.state
    const { firstName, lastName, email, password } = form
    console.log(this.state.form);

    return (
      <div className="flex-container">
        <h1>Sign Up</h1>
        <form className="sign-up">
          <Col xs={4}></Col>
          <Col xs={4}>
            <Row>
              <FormGroup controlId="formBasicText" validationState={validation}>
                <ControlLabel id="first-name">First Name</ControlLabel>
                <FormControl
                  name="firstName"
                  type="text"
                  value={firstName}
                  placeholder="First Name"
                  onChange={this.handleChange.bind(this)}
                />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup controlId="formBasicText" validationState={validation}>
                <ControlLabel>Last Name</ControlLabel>
                <FormControl
                  name="lastName"
                  type="text"
                  value={lastName}
                  placeholder="Last Name"
                  onChange={this.handleChange.bind(this)}
                />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup controlId="formBasicText" validationState={validation}>
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  name="email"
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={this.handleChange.bind(this)}
                />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup controlId="formBasicText" validationState={validation}>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  name="password"
                  type="text"
                  value={password}
                  placeholder="Password"
                  onChange={this.handleChange.bind(this)}
                />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </FormGroup>
            </Row>
            <Row>
              <Button id="submit" onClick={this.handleSubmit.bind(this)}>Create Account</Button>
            </Row>
          </Col>
          <Col xs={4}></Col>
        </form>
      </div>
    );
  }
}

export default SignUp
