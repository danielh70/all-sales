import React, { Component } from 'react';
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
          <Modal.Title id="contained-modal-title-lg"><span id="description">Modal heading {this.props.price}</span></Modal.Title>

        </Modal.Header>
          <Modal.Body>
            <div>
            <h4 id="description">Wrapped Text</h4>
            <p id="description">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p id="description">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
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
