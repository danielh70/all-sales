import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, redirect } from '../actions/items'
import { setLoginStatus } from '../actions/userForm'
import NavBar from '../components/navbar';
import { Loader } from './Loader'
import '../App.css';
import Checkbox from '../components/checkbox';
import { Redirect } from 'react-router-dom';


const mapStateToProps = (store) => {
  return {
    APIURL: store.appState.APIURL,
    authorized: store.authorized.authToken,
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
    let token = this.props.authorized
      console.log(this.selectedCheckboxes);
      let selected = [...this.selectedCheckboxes]
      console.log(selected)

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
    console.log("label id:", id);
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
    <Checkbox
      label={label.name}
      handleCheckboxChange={this.toggleCheckbox}
      key={label.id}
      id={label.id}
    />
  )


    render() {
    const { items } = this.props
    console.log("items:", this.props.items.all)



      return (
        <div>
          <NavBar />

          { this.props.items.all.length === 0 && <Loader /> }


          <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

            {
            this.selectedCheckboxes &&
            <button className="btn btn-default" type="submit">Save</button>
            }

            { this.props.items.redirect && <Redirect to="/cart" /> }
            </form>
        </div>
      )
    }
  }
)
