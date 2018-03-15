import React, { Component } from 'react';
import NavBar from '../components/navbar';
import SignUpForm from '../components/sign-up';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoginStatus } from '../actions/userForm';


const mapStateToProps = (store) => {
  return {
    APIURL: store.appState.APIURL,
    authorized: store.authorized.loggedIn
  }
}


class SignUpPage extends Component {

  componentWillMount() {
    this.props.dispatch(setLoginStatus(this.props.APIURL))
  }


    render() {
      console.log(this.props, this.props.authorized)
      return (
        <div>
          <NavBar />
          <SignUpForm />

            {this.props.authorized && <Redirect to="/shopping" />}
        </div>
      )
    }
  }

  export default connect(
    mapStateToProps
  )(SignUpPage)
