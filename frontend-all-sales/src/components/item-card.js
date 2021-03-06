import React, { Component } from 'react';

import {
    Button,
    CardText
} from 'react-bootstrap';
import '../App.css';

class ItemCard extends Component {
  render() {
    const { id, title, image } = this.props
    // console.log("image from card............", image);
      return (
        <div className="hvr-grow-shadow">
          <div className=" item-preview shadow cell gradient">

            <div>
              <img src={image} alt="testing" className="itemPreview responsive-image"/>
              <h3 id="thumbnail-label" style={{width: 285}}>{title}</h3>
              <p>
                <Button id={id} onClick={this.props.handleModal} bsStyle="primary">More Info</Button>&nbsp;
                <Button id={id} onClick={this.props.handleSubmit} href="/cart" bsStyle="default">Add to Cart</Button>
              </p>
              <br />
            </div>
          </div>
        </div>

    );
  }
}




export default ItemCard
