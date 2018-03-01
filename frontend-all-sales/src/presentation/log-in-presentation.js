import React, { Component } from 'react';
import NavBar from '../components/navbar';
import LogIn from '../components/log-in';
import { Redirect } from 'react-router-dom';

var APIURL;
  if(process.env.NODE_ENV === 'production') {
    APIURL = "/"
  } else {
    APIURL = "http://localhost:3000/"
  }

class LogInPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      success: false,
      authorized: false,
      valid: false

    }
  }

  render() {
    return (
      <div>
        <NavBar />

          <LogIn />

          {this.state.success && <Redirect to="/" />}
      </div>
    )
  }
}


export default LogInPage
