import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import {
    Thumbnail,
    Button,
    Col,
    Grid,
    CardText,
    Row,
} from 'react-bootstrap';
import '../App.css';

class ItemCard extends Component {
  render() {
    const { id, title, image, description } = this.props
      return (
        <div className="item-card hvr-grow-shadow item-preview cell responsive-image">

          <Thumbnail src={image} alt="242x200" className="responsive-image">
            <h3 id="thumbnail-label">{title}</h3>
            <p id="description">{description}</p>
            <p>
              <Button id={id} bsStyle="primary" disabled>More Info</Button>&nbsp;
              <Button id={id} onClick={this.props.handleSubmit} bsStyle="default">Add to Cart</Button>
            </p>
          </Thumbnail>

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
