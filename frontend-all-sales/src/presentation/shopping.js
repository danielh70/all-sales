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
    APIURL: store.appState.APIURL
  }
}

export default connect(mapStateToProps)(class Shopping extends Component {

  componentDidMount() {
    this.props.dispatch(getItems(this.props.APIURL))
    this.selectedCheckboxes = new Set();
  }


  handleFormSubmit = (id, label) => {
     id.preventDefault();


     for (const checkbox of this.selectedCheckboxes) {
       console.log(this.selectedCheckboxes, 'is selected.');
     }
     console.log(this.selectedCheckboxes);
     let selected = [...this.selectedCheckboxes]
     console.log(selected)
         fetch(`${this.props.APIURL}api/items/new?authToken=9236b2f0-24bc-11e8-8d57-d5435fb00974`,
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
          { items.length === 0 && <Loader /> }

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
