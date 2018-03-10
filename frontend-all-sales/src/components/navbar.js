import React, { Component } from 'react';
import LoggedInNav from './logged-in-nav';
import LoggedOutNav from './logged-out-nav';
import { functions } from '../functions/functions';


class NavBarHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  logOut() {
    this.setState({loggedIn: false})
    localStorage.removeItem("authToken")
  }

  componentWillMount() {
    if (typeof localStorage.authToken !== "undefined") {
      this.setState({loggedIn: true})
      } else {
    }
  }

  LogInCheck() {
    if (functions.authCheck()) {
      return <LoggedInNav logOut={this.logOut.bind(this)} />
    } else {
      return <LoggedOutNav />
    }
  }

  render() {
    // console.log(authToken)
    return (
      <div>
        {this.LogInCheck()}
      </div>

    )
  }
}

export default NavBarHeader;
