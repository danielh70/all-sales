import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';



class ItemModal extends Component {
  render() {
    const { price, name, description } = this.props.item
    // console.log('logging from modal', this.props);
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg"><span id="description">{name}</span></Modal.Title>

        </Modal.Header>
          <Modal.Body>
            <div>
            <h4 id="description">Price: <span id="money">${price}</span></h4>
            <p id="description">
              {description}
            </p>
          </div>
          </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ItemModal
