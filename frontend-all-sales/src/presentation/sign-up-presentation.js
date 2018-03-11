import React, { Component } from 'react';
import NavBar from '../components/navbar';
import SignUpForm from '../components/sign-up';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = (store) => {
  return {
    APIURL: store.appState.APIURL,
    authorized: store.authorized.loggedIn
  }
}


export default connect(mapStateToProps)(class SignUpPage extends Component {



    render() {
      console.log(this.props, this.props.authorized)
      return (
        <div>
          <NavBar />
          <SignUpForm />

            {this.props.authorized && <Redirect to="/" />}
        </div>
      )
    }
  }
)
