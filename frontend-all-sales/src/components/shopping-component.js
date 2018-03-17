import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getItems, redirect, submitItems } from '../actions/items'
// import { setLoginStatus } from '../actions/userForm'
import NavBar from './navbar';
import { Loader } from '../presentation/Loader'
import Checkbox from './checkbox';
import { Redirect } from 'react-router-dom';
import '../App.css';



 export default connect()(class ShoppingComponent extends Component {
   constructor(props) {
     super(props)
   }

  componentWillMount() {
    this.selectedCheckboxes = new Set();
    this.props.setLoginStatus();
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
    return (
      <div>
        <NavBar />

        <h1 className="move-left">Welcome <span id="user-name">{this.props.authorized.user.firstName}!</span></h1>
        <h3 className="white-text-shadow move-left">Add items to your cart:</h3>

        { this.props.items.all.length === 0 && <Loader /> }

        <center>
          <form onSubmit={this.handleFormSubmit} id="checkbox-form">
              {this.createCheckboxes()}

            {
            this.selectedCheckboxes &&
              <button className="checkbox-form-button move-left" type="submit">Add to cart</button>
            }

            { this.props.items.redirect && <Redirect to="/cart" /> }
            </form>
          </center>
      </div>
    )
  }
}
)
