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

const API = "http://localhost:3000"

class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentWillMount() {
    fetch(`${API}/shopping`)
    .then(resp => {
      return resp.json()
    })
    .then(resp => {
      this.setState({ items: resp.items })
    })
  }

  render() {
    const { items } = this.state

    return (
      <div>
        <NavBar />

        {items.map((el, i) => {
          return (
            <h5 key={i}>{el.name}</h5>
          )
        })}

      </div>
    );
  }
}

export default Shopping
