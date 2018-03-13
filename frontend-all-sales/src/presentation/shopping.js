import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/items'
import NavBar from '../components/navbar';
import { Loader } from './Loader'
import '../App.css';
import Checkbox from '../components/checkbox';


const mapStateToProps = (store) => {
  return {
    items: store.items.all,
    APIURL: store.appState.APIURL,
    authorized: store.authorized.authToken
  }
}

export default connect(mapStateToProps)(class Shopping extends Component {

  componentWillMount() {
    this.props.dispatch(getItems(this.props.APIURL))
    this.selectedCheckboxes = new Set();
  }


  handleFormSubmit = (id, label) => {
    id.preventDefault();
    let token = this.props.authorized
    console.log(token)

      for (const checkbox of this.selectedCheckboxes) {
        console.log(this.selectedCheckboxes, 'is selected.');
      }
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
          console.log("res", res)
          return res.json()
        })
        .catch(e => console.log("error----------", e))
   }


  toggleCheckbox = (label, id) => {
    console.log("label id:", id);
    if (this.selectedCheckboxes.has(id, label)) {
      this.selectedCheckboxes.delete(id, label);
    } else {
      this.selectedCheckboxes.add(id);
    }
  }


  createCheckboxes = () => (
    this.props.items.map(this.createCheckbox)
  )

  loader() {
    while (this.props.items.length === 0) {
      return <Loader />
    }
  }

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
    console.log("items:", this.props.items)



      return (
        <div>
          <NavBar />

          <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

            {
            this.selectedCheckboxes &&
            <button className="btn btn-default" type="submit">Save</button>
            }
            </form>
        </div>
      )
    }
  }
)
