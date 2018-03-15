import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, redirect } from '../actions/items'
import { setLoginStatus } from '../actions/userForm'
import NavBar from '../components/navbar';
import { Loader } from './Loader'
import Checkbox from '../components/checkbox';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import bgImage from '../components/bgImage';
import '../App.css';


const mapStateToProps = (store) => {
  return {
    APIURL: store.appState.APIURL,
    authorized: store.authorized,
    items: store.items
  }
}

export default connect(mapStateToProps)(class Shopping extends Component {

  componentDidMount() {
    this.props.dispatch(setLoginStatus(this.props.APIURL))
    .then(res => this.props.dispatch(getItems(this.props.APIURL)))
    this.selectedCheckboxes = new Set();

  }

  redirect = () => {
   this.props.dispatch(redirect())
  }



  handleFormSubmit = (id) => {
    id.preventDefault()
    let token = this.props.authorized.authToken
      // console.log(this.selectedCheckboxes);
      let selected = [...this.selectedCheckboxes]
      // console.log(selected)

        fetch(`${this.props.APIURL}api/items/new?authToken=${token}`,
          {
            body: JSON.stringify(selected),
            headers: {
              'Content-Type': 'application/json'
            },
            method: "POST"
          }
        )
        .then(res => {
          return res.json()
        })
        .then(res => {
          if(res) {
            this.redirect()
          }
        })
        .catch(e => console.log("error----------", e))
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
