import React, { Component } from 'react';
import NavBar from '../components/navbar';
import SignUp from '../components/sign-up';
import Center from '../components/center';
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

  handleNewUser(params) {
    fetch(`${APIURL}api/users`,
      {
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      }
    )
    .then(res => {
      // console.log(res)
      if(res.status === 201) {
        if(res.status === 201) {
          localStorage.setItem('name', params.firstName)
        }
        this.setState({success: true})
      }
    })
    .catch(e => console.log(e))
  }

  render() {
    return (
      <div>
        <NavBar />

          <SignUp onSubmit={this.handleNewUser.bind(this)} />

          {this.state.success && <Redirect to="/" />}
      </div>
    )
  }
}


export default SignUpPage
