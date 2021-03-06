import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shopping from './presentation/shopping';
import SignUpPage from './presentation/sign-up-presentation';
import LogInPage from './presentation/log-in-presentation';
import ShoppingContainer from './containers/shopping-container';
import Cart from './components/cart';
import Home from './presentation/home';
import NewPostPage from './presentation/new-post-page';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ImageUpload from './components/image-upload';
import './App.css';



class App extends Component {

    render() {
      return (
        <div className="App">
          <Router>
            <div>
              <Route exact path="/" render={props => (
                <Home />
              )} />

              <Route exact path="/home" render={props => (
                <Home />
              )} />

             <Route exact path="/shopping" render={props => (
               <div className="App">
                <Shopping />
                </div>
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

              <Route exact path="/newpost" render={props => (
                <NewPostPage />
              )} />

              <Route exact path="/upload" render={props => (
                <ImageUpload />
              )} />

            </div>
          </Router>
        </div>
      );
    }
  }

export default connect()(App)
