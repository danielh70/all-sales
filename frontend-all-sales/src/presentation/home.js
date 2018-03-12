import React, { Component } from 'react';
import NavBar from '../components/navbar';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import {
  Col,
  Grid,
  PageHeader,
  Row
} from 'react-bootstrap'
import '../App.css';

class Home extends Component {
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

export default Home
