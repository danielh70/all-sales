import React, { Component } from 'react';
import NavBarHeader from './components/navbar';
import Shopping from './presentation/shopping';
import { SignUpPage } from './presentation/sign-up-presentation';
import LogInPage from './presentation/log-in-presentation';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" render={props => (
              <div>
                <NavBarHeader />
                <h1 className="header">Welcome</h1>
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
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
