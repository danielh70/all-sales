import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';



class ItemModal extends Component {
  render() {
    console.log('logging from modal', this.props);
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg"><span id="description">Guess what? Placeholder{this.props.price}</span></Modal.Title>

        </Modal.Header>
          <Modal.Body>
            <div>
            <h4 id="description">Home of the placeholder</h4>
            <p id="description">
              Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder
              Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder
              Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder
              Placeholder Placeholder Placeholder Placeholder
            </p>
            <p id="description">
              Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder
              Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder
              Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder
              Placeholder Placeholder Placeholder Placeholder
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
