import React, { Component } from 'react';
import NavBar from '../components/navbar';
import LogInForm from '../components/log-in';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoginStatus } from '../actions/userForm';


const mapStateToProps = (store) => {
  return {
    APIURL:     store.appState.APIURL,
    authorized: store.authorized.loggedIn,
    loading:    store.items.loading
  }
}

export default connect(mapStateToProps)(class LogInPage extends Component {

  componentWillMount() {
    this.props.dispatch(setLoginStatus(this.props.APIURL))
  }


    render() {
      console.log(this.props.loading)
      return (
        <div>
          <NavBar />

            <LogInForm />

            {this.props.authorized && <Redirect to="/shopping" />}
        </div>
      )
    }
  }
)
