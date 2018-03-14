import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';


class LoggedInNav extends Component {


  render() {

    return (
      <div>
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/home" className="header">All Sales</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/shopping" className="shop-text">
              Shop
            </NavItem>
            <NavItem eventKey={2} href="/cart">
              Shopping Cart
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Authored</MenuItem>
              <MenuItem eventKey={3.2}>By</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Daniel Hook!</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem className="log-in-nav" eventKey={2} onClick={this.props.logout} href="/login">
              Log Out
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export default LoggedInNav;
