import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBarHeader from './components/navbar';
import Shopping from './presentation/shopping';
import SignUpPage from './presentation/sign-up-presentation';
import LogInPage from './presentation/log-in-presentation';
import Cart from './components/cart';
import Home from './presentation/home';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { getItems } from './actions/items';
import { setLoginStatus } from './actions/userForm';
import './App.css';


const mapStateToProps = (store) => {
  return {
    APIURL: store.appState.APIURL
  }
}

export default connect(mapStateToProps)(class App extends Component {

  componentWillMount() {
    this.props.dispatch(getItems(this.props.APIURL))
    this.props.dispatch(setLoginStatus(this.props.APIURL))
  }

    render() {
      return (
        <div className="App">
          <Router>
            <div>
              <Route exact path="/" render={props => (
                <div>
                  <NavBarHeader />
                </div>
              )} />

              <Route exact path="/home" render={props => (
                <div id="haha">
                <Home />
                </div>
              )} />

             <Route exact path="/shopping" render={props => (
                <Shopping />
              )} />

              <Route exact path="/signup" render={props => (
                <SignUpPage />
              )} />

              <Route exact path="/login" render={props => (
                <LogInPage />
              )} />

              <Route exact path="/cart" render={props => (
                <Cart />
              )} />

            </div>
          </Router>
        </div>
      );
    }
  }
)
