import React, { Component } from 'react';

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
    const { label, id } = this.props;
    const { isChecked } = this.state;
    console.log(this.state)

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


export default Checkbox;
