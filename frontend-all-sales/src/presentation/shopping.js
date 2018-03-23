import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, redirect, submitItems, startLoading, stopLoading } from '../actions/items'
import { setLoginStatus } from '../actions/userForm'
import NavBar from '../components/navbar';
import { Loader } from './Loader'
import Checkbox from '../components/checkbox';
import { Redirect } from 'react-router-dom';
import '../App.css';


const mapDispatchToProps = (dispatch) => {
  return {
    setLoginStatus: () => {
      dispatch(setLoginStatus()).then(res => {
        dispatch(getItems())
      })
    },
    submitItems: (selected) => {
      dispatch(submitItems(selected))
    },
    redirect: () => {
      dispatch(redirect())
    },
    startLoading: () => {
      dispatch(startLoading())
    },
    stopLoading: () => dispatch(stopLoading())
    }
  }


function mapStateToProps(state) {
  return {
    authorized: state.authorized,
    items: state.items
  }
}

class Shopping extends Component {

  componentWillMount() {
    this.props.startLoading();
    this.props.setLoginStatus();
    this.selectedCheckboxes = new Set();

  }

  componentDidMount() {
    this.props.stopLoading();
  }

  redirect = () => {
   this.props.redirect()
  }

  handleFormSubmit = (id) => {
    id.preventDefault()
    let token = this.props.authorized.authToken
    let selected = [...this.selectedCheckboxes]

    this.props.submitItems(selected)
    this.redirect()
   }


  toggleCheckbox = (label, id) => {
    // console.log("label id:", id);
    if (this.selectedCheckboxes.has(id)) {
      this.selectedCheckboxes.delete(id);
    } else {
      this.selectedCheckboxes.add(id);
    }
  }

  createCheckboxes = () => (
    this.props.items.all.map(this.createCheckbox)
  )

  createCheckbox = label => (
    <table id="checkbox" key={label.id}>
      <Checkbox
        label={label.name}
        handleCheckboxChange={this.toggleCheckbox}
        key={label.id}
        id={label.id}
      />
    </table>
  )


  render() {
    const { items } = this.props
        console.log("all items****************************", this.props.items);

    return (
      <div>
        <NavBar />

        <h1 className="move-left">Welcome <span id="user-name">{this.props.authorized.user.firstName}!</span></h1>
        <h3 className="white-text-shadow move-left">Add items to your cart:</h3>

        { (items.loading || items.all.length === 0) && <Loader /> }

        <center>
          <form onSubmit={this.handleFormSubmit} id="checkbox-form">
               { this.createCheckboxes() }
               <img src={this.props.items.all.url} />


            {
            this.selectedCheckboxes &&
              <button className="checkbox-form-button move-left" type="submit">Add to cart</button>
            }

            { items.redirect && <Redirect to="/cart" /> }
            </form>
          </center>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shopping)
