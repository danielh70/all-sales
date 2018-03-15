import React, { Component } from 'react';
import { setLoginStatus } from '../actions/userForm';
import { connect } from 'react-redux';
import NavBar from '../components/navbar';
import {
  Grid,
  PageHeader,
  Row
} from 'react-bootstrap'
import reduxlogo from '../public/images/reduxlogo.svg'
import reactlogo from '../public/images/reactlogo.svg'
import graphqllogo from '../public/images/graphqllogo.svg'
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
                Authored by <span id="user-name">Daniel Hook</span>
              </PageHeader>
            </Grid>
          </Row>
          <img src={reduxlogo} className="redux-logo" alt="logo" />
          <img src={reactlogo} className="react-logo" alt="logo" />
          <img src={graphqllogo} className="graphql-logo" alt="logo" />
        </div>
      );
    }
  }
)
