import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/items'
import NavBar from '../components/navbar';
import { Loader } from './Loader'
import '../App.css';
import Checkbox from '../components/checkbox';

// post to database the ID's of the selected items
// WHERE user id = current user id
// backend "add" the item ids

const mapStateToProps = (store) => {
  return {
    items: store.items.all,
    APIURL: store.appState.APIURL
  }
}

export default connect(mapStateToProps)(class Shopping extends Component {
  //
  // componentWillMount = () => {
  //
  // }

  componentDidMount() {
    this.props.dispatch(getItems(this.props.APIURL))
    this.selectedCheckboxes = new Set();
  }



  handleFormSubmit = e => {
     e.preventDefault();
     console.log(this.selectedCheckboxes);

     for (const checkbox of this.selectedCheckboxes) {
       console.log(this.selectedCheckboxes, 'is selected.');
     }
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

              <button className="btn btn-default" type="submit">Save</button>
            </form>
        </div>
      )
    }
  }
)
