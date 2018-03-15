import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shopping from './presentation/shopping';
import SignUpPage from './presentation/sign-up-presentation';
import LogInPage from './presentation/log-in-presentation';
import Cart from './components/cart';
import Home from './presentation/home';
import NewPostPage from './presentation/new-post-page';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


const mapStateToProps = (store) => {
  return {
    APIURL: store.appState.APIURL
  }
}

class App extends Component {

  // componentWillMount() {
  //   this.props.dispatch(setLoginStatus(this.props.APIURL))
  // }

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

            </div>
          </Router>
        </div>
      );
    }
  }
  
export default connect(
  mapStateToProps
)(App)
