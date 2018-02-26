import React, { Component } from 'react';
import NavBar from '../components/navbar';
import '../App.css';

var APIURL;
  if(process.env.NODE_ENV === 'production') {
    APIURL = "/"
  } else {
    APIURL = "http://localhost:3000/"
  }

class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentWillMount() {
    fetch(`${APIURL}api/shopping`)
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.setState({items: res.items})
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
