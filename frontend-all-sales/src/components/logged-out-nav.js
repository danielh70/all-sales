import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

class LoggedOutNav extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/home">All Sales</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/shopping" className="shop-text">
              Shop
            </NavItem>
            <NavItem disabled eventKey={2} href="#">
              Shopping Cart
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Authored</MenuItem>
              <MenuItem eventKey={3.2}>By</MenuItem>
              <MenuItem eventKey={3.3}>Daniel</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Hook!</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem className="sign-up-nav" eventKey={1} href="/signup">
              Sign Up
            </NavItem>
            <NavItem className="log-in-nav" eventKey={2} href="/login">
              Log In
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }

}

export default LoggedOutNav;
