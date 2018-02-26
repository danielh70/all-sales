import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';


class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">All Sales</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/shopping" className="shop-text">
              Shop
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem className="sign-up-nav" eventKey={1} href="/signup">
              Sign Up
            </NavItem>
            <NavItem className="log-in-nav" eventKey={2} href="#">
              Log In
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export default NavBar;
