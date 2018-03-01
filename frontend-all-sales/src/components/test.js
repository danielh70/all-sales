import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCounter } from '../actions/counter';

const mapStateToProps = (store, ownProps) => {
  return {
    count: store.count
  }
}

export default connect(mapStateToProps)(class MyComponent extends Component {
  incrementClicked() {
    this.props.dispatch(addToCounter())
  }
  render() {
    return(
      <div>
        <h1>The count is: {this.props.count}</h1>
        <button
          onClick={this.incrementClicked.bind(this)}>
          Click
        </button>
      </div>
    )
  }
})
