import React, { Component } from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    authorized: state.authorized,
    items: state.items
  }
}


class Checkbox extends Component {
  state = {
    isChecked: false,
    id: null
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label, id } = this.props;
    // console.log(label)

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
        id: id
      }
    ));

    handleCheckboxChange(label, id);
  }

  render() {
    console.log(this.props.items.all.url)
    const { label, id } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={id}
            checked={isChecked}
            id={id}
            onChange={this.toggleCheckboxChange}
          />
          {label}
        </label>
      </div>
    );
  }
}


export default connect(mapStateToProps)(Checkbox);


{/* <img src={this.props.items.all.url} /> */}



  // toggleCheckbox = (label, id) => {
  //   // console.log("label id:", id);
  //   if (this.selectedCheckboxes.has(id)) {
  //     this.selectedCheckboxes.delete(id);
  //   } else {
  //     this.selectedCheckboxes.add(id);
  //   }
  // }

  //
  // handleFormSubmit = (id) => {
  //   id.preventDefault()
  //   let selected = [...this.selectedCheckboxes]
  //
  //   this.props.submitItems(selected)
  //   this.redirect()
  //  }

  // createCheckboxes = () => {
  //   this.props.items.all.map((el, i) => {
  //     return (
  //     this.createCheckbox
  //     <a href={this.props.items.all[i].url}>link</a>
  //   )
  //   })
  // }

  // toggleCheckbox = (label, id) => {
  //   // console.log("label id:", id);
  //   if (this.selectedCheckboxes.has(id)) {
  //     this.selectedCheckboxes.delete(id);
  //   } else {
  //     this.selectedCheckboxes.add(id);
  //   }
  // }
  //
  // createCheckbox = label => (
  //   <table id="checkbox" key={label.id}>
  //     <Checkbox
  //       label={label.name}
  //       handleCheckboxChange={this.toggleCheckbox}
  //       key={label.id}
  //       id={label.id}
  //     />
  //   </table>
  // )
  //
  // createCheckboxes = () => (
  //   this.props.items.all.map(this.createCheckbox)
  // )
  //
