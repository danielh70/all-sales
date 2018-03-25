import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import {
    Button,
    CardText
} from 'react-bootstrap';
import '../App.css';

class ItemCard extends Component {
  render() {
    const { id, title, image, description } = this.props
      return (
        <div className="hvr-grow-shadow">
          <div className=" item-preview shadow cell">

            <div className="cell">
              <img src={image} alt="testing"  className="itemPreview responsive-image"/>
              <h3 id="thumbnail-label">{title}</h3>
              <p id="description">{description}</p>
              <p>
                <Button id={id} bsStyle="primary" disabled>More Info</Button>&nbsp;
                <Button id={id} onClick={this.props.handleSubmit} bsStyle="default">Add to Cart</Button>
              </p>
              <br />
            </div>
          </div>
        </div>

    );
  }
}




export default ItemCard




{/* <Card>
    <CardImg top width='100%' src={image} alt="Item Image" />
    <CardBody>
      <CardTitle className='cardTitle'>{title}</CardTitle>
      <CardText>Testing card text</CardText>
      <Button onClick={this.props.handleSubmit}>The Details</Button>
    </CardBody>
</Card> */}
