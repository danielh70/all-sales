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

import { connect } from 'react-redux'

import { addUser, updateUserForm } from '../actions/userForm'

const mapStateToProps = (store) =>{
  return {
    userForm: store.userForm.user,
    errors: store.userForm.errors,
    APIURL: store.appState.APIURL
  }
}


export default connect(mapStateToProps)(class SignUp extends Component {

  handleChange(e) {
  this.props.dispatch(updateUserForm(e.target.name, e.target.value))
  }

  handleSubmit() {
    this.props.dispatch(addUser(this.props.APIURL, this.props.userForm))
  }

  errorsFor(attribute){
  var errorString = ""
  if(this.props.errors.length > 0){
    const errors = this.props.errors.filter(error => error.param === attribute )
    if(errors){
      errorString = errors.map(error => error.msg ).join(", ")
    }
  }
  return errorString === "" ? null : errorString
}

  //
  // handleChange(e) {
  //   const formState = Object.assign({}, this.state.form)
  //   formState[e.target.name] = e.target.value
  //   this.setState({ form: formState })
  // }

  render() {
    const { firstName, lastName, email, password } = this.props.userForm

    return (
      <div className="flex-container">
        <h1>Sign Up</h1>
        <form className="sign-up">
          <Col xs={4}></Col>
          <Col xs={4}>
            <Row>
              <FormGroup controlId="formBasicText" >
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
              <FormGroup controlId="formBasicText">
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
              <FormGroup controlId="formBasicText">
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
              <FormGroup controlId="formBasicText">
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
)
