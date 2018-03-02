import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/navbar';
import { getItems } from '../actions/items'
import '../App.css';


const mapStateToProps = (store) => {
  return {
    items: store.items.all
  }
}

export default connect(mapStateToProps)(({items}) => {

  if (items.length === 0) {
    return <h1>Loading...</h1>
  }

    return (
      <div>
        <NavBar />
        {items.map((el, i) => {
          return <h5 key={i}>{el.name}</h5>
        })}
      </div>
    );
  }
)
