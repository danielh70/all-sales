import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/items'
import NavBar from '../components/navbar';
import { Loader } from './Loader'
import '../App.css';
import { Checkbox } from 'react-bootstrap'


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

  // componentWillReceiveProps(nextProps) {
  //   console.log("nextProps:", nextProps);
  // }

  handleAdd = (el) => {
    console.log(el)
  }

    render() {
    const { items } = this.props
    console.log("items:", this.props.items)

      return (
        <div>
          <fieldset>
          <NavBar />
          { items.length === 0 && <Loader /> }

          {items.map(el => {
            return (
              <div key={el.id}>
                <h5 id={el.id}>{el.name}</h5>
                <input type="checkbox" id="coding" name="interest" value={el.id} />
              </div>
            )
          })}
          <button type="submit" onClick={this.handleAdd}>Click</button>
          </fieldset>
        </div>
      )
    }
  }
)
