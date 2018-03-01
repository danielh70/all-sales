import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import LoggedInNav from './logged-in-nav';
import LoggedOutNav from './logged-out-nav';

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
    if (this.state.loggedIn !== false) {
      return <LoggedInNav logOut={this.logOut.bind(this)} />
    } else {
      return <LoggedOutNav />
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {this.LogInCheck()}
      </div>

    )
  }
}

export default NavBarHeader;
