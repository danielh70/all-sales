import React, { Component } from 'react';
import NavBar from '../components/navbar';
import LogInForm from '../components/log-in';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/userForm';

const mapStateToProps = (store) => {
  return {
    APIURL: store.appState.APIURL,
    authorized: store.authorized.loggedIn
  }
}




export default connect(mapStateToProps)(class LogInPage extends Component {

  handleSubmit() {
     function login(values){
      return (dispatch) => {
        return fetch(`${this.props.APIURL}api/login`,
          {
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json'
            },
            method: "POST"
          }
        )
        .then(res => {
          console.log("res", res)
          return res.json()
        })
        .then(res => {
          console.log("2nd res", res)
          if(res.errors) {
            dispatch({
              type: 'ERROR_ADDING_USER',
              payload: res.errors
            })
          } else {
            dispatch({
              type: 'LOG_IN',
              payload: res.user
            })
          }
        })
        .catch(e => console.log(e))
      }
    }

  }

    render() {
      console.log(this.props, this.props.authorized)
      return (
        <div>
          <NavBar />

            <LogInForm onSubmit={this.handleSubmit.bind(this)}/>

            {this.props.authorized && <Redirect to="/" />}
        </div>
      )
    }
  }
)
