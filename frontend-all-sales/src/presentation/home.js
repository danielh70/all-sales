import React, { Component } from 'react';
import { setLoginStatus } from '../actions/userForm';
import { connect } from 'react-redux';
import NavBar from '../components/navbar';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import {
  Col,
  Grid,
  PageHeader,
  Row
} from 'react-bootstrap'
import '../App.css';

const mapStateToProps = (store) => {
  return {
    APIURL: store.appState.APIURL
  }
}

export default connect(mapStateToProps)(class Home extends Component {

  componentWillMount() {
    this.props.dispatch(setLoginStatus(this.props.APIURL))
  }

    render() {
      return (
        <div>
          <NavBar />
          <Row>
            <Grid>
              <PageHeader>
                Hello!
              </PageHeader>
            </Grid>
          </Row>
        </div>

      );
    }
  }
)
