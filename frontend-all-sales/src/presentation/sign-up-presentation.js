import React, { Component } from 'react';
import NavBar from '../components/navbar';
import SignUp from '../components/sign-up';
import { Redirect } from 'react-router-dom';

var APIURL;
  if(process.env.NODE_ENV === 'production') {
    APIURL = "/"
  } else {
    APIURL = "http://localhost:3000/"
  }

class SignUpPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      success: false
    }
  }

  handleNewUser = (e) => {
    fetch(`${APIURL}api/users`,
      {
        body: JSON.stringify(e),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      }
    )
    .then(res => {
      if (res.status === 201) {
        return res.json()
      }
    })
    .then(res => {
      localStorage.setItem("authToken", res.authToken)
    })
    .then(e => {
      this.setState({success: true})
    })
    .catch(e => console.log(e))
  }

  render() {
    return (
      <div>
        <NavBar />

          <SignUp onSubmit={this.handleNewUser} />

          {this.state.success && <Redirect to="/" />}
      </div>
    )
  }
}


export default SignUpPage
