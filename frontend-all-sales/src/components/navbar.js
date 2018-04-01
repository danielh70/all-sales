import React, { Component } from 'react';
import LoggedInNav from './logged-in-nav';
import LoggedOutNav from './logged-out-nav';
import { connect } from 'react-redux';
import { logout } from '../actions/userForm'

const mapStateToProps = (store) => {
  return {
    authorized: store.authorized.loggedIn
  }
}

class NavBarHeader extends Component {

  logout = () => {
    localStorage.removeItem("authToken")
    this.props.dispatch(logout())
  }

  // componentWillMount() {
  //   this.props.dispatch(setLoginStatus(this.props.APIURL))
  // }

  componentWillMount() {
    if (this.props.authorized) {
      return <LoggedInNav logout={this.logout}/>
    } else {
      return <LoggedOutNav />
    }
  }

  render() {
    // console.log(authToken)
    return (
      <div>
        { this.componentWillMount() }
      </div>

    )
  }
}

export default connect(
  mapStateToProps
)(NavBarHeader)
