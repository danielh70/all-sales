import React, { Component } from 'react';
import NavBar from '../components/navbar';
import NewPostForm from '../components/new-post-component';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoginStatus } from '../actions/userForm';




const mapStateToProps = (store) => {
  return {
    APIURL: store.appState.APIURL,
    authorized: store.authorized.loggedIn
  }
}


export default connect(mapStateToProps)(class NewPostPage extends Component {

  componentWillMount() {
    this.props.dispatch(setLoginStatus(this.props.APIURL))
  }


    render() {
      console.log(this.props, this.props.authorized)
      return (
        <div>
          <NavBar />
          <NewPostForm />
        </div>
      )
    }
  }
)

// { !authorized && <Redirect to="/login" /> }
