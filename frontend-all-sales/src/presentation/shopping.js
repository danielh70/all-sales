import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/navbar';
import { Loader } from './Loader'
import '../App.css';


const mapStateToProps = (store) => {
  return {
    items: store.items.all
  }
}

export default connect(mapStateToProps)(({items}) => {

  if (items.length === 0) {
    return <Loader />
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
