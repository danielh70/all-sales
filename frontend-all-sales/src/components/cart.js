import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/items'
import NavBar from '../components/navbar';
import { Loader } from '../presentation/Loader'
import '../App.css';


const mapStateToProps = (store) => {
  return {
    APIURL: store.appState.APIURL
  }
}

export default connect(mapStateToProps)(class Cart extends Component {


  componentDidMount() {
    this.props.dispatch(getItems(this.props.APIURL))
  }

    render() {
      return (
        <div>
          <NavBar />
          <h1>Welcome (placeholder)!</h1>
          <h3>Shopping cart:</h3>
        </div>
      )
    }
  }
)
