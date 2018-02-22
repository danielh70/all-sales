import React, { Component } from 'react';
import NavBar from './components/navbar';
import Shopping from './presentation/shopping';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import {
  Col,
  Grid,
  PageHeader,
  Row
} from 'react-bootstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <div>
          <Route exact path="/" render={props => (
            <div>
            <h1 className="header">Welcome</h1>
           <NavBar />
           </div>
         )} />

         <Route exact path="/shopping" render={props => (
           <Shopping />
        )} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
