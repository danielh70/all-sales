import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/items'
import NavBar from '../components/navbar';
import { Loader } from './Loader'
import '../App.css';


const mapStateToProps = (store) => {
  return {
    items: store.items.all,
    APIURL: store.appState.APIURL
  }
}

export default connect(mapStateToProps)(class Shopping extends Component {


  componentDidMount() {
    this.props.dispatch(getItems(this.props.APIURL))
  }

    render() {
    // console.log(this.props.items)

      return (
        <div>
          <NavBar />
          { this.props.items.length === 0 && <Loader /> }

          {this.props.items.map((el, i) => {
            return <h5 key={i}>{el.name}</h5>
          })}
        </div>
      )
    }
  }
)
