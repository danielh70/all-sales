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


var APIURL;
  if(process.env.NODE_ENV === 'production') {
    APIURL = "/"
  } else {
    APIURL = "http://localhost:3000/"
  }

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: ''
      },
      validation: null
    }
  }

  // handleSubmit(e) {
  //   // e.preventDefault()
  //   this.props.onSubmit(this.state.form)
  // }


  authorize = (e) => {
    const { email, password } = this.state.form

    fetch(`${APIURL}api/login`,
    {
      method: "POST",
      headers: {
        'content-type': 'application/json'
    },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(res => {
      return res.json()
      console.log("habababab", res)
    })
    .then(data => {
      if(data.authToken !== undefined) {
      localStorage.setItem("authToken", data.authToken)
        console.log("res:", data);
      }
    })
    .catch(e => console.log("error:", e))
  }


  handleChange = (e) => {
    const formState = Object.assign({}, this.state.form)
    formState[e.target.name] = e.target.value
    this.setState({ form: formState })
  }

  render() {
    const { email, password } = this.state.form
    const { validation } = this.state
    console.log(this.state.form)

    return (
      <div className="flex-container">
        <h1>Sign Up</h1>
        <form className="sign-up">
          <Col xs={4}></Col>
          <Col xs={4}>
            <Row>
              <FormGroup controlId="formBasicText" validationState={validation}>
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  name="email"
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </FormGroup>
            </Row>
            <Row>
              <Button id="submit" onClick={this.authorize}>Log In</Button>
            </Row>
          </Col>
          <Col xs={4}></Col>
        </form>
      </div>

    )
  }
}







export default LogIn
