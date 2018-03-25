import React, { Component } from 'react';
import { FormGroup, Row, ControlLabel } from 'react-bootstrap';
import Dropzone from 'react-dropzone'
import '../App.css';

const APIURL = process.env.NODE_ENV === 'production' ? "/" : "http://localhost:3000/";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      form: {
        image: {
          name:      '',
          data:      '',
          extension: ''
        }
      }
    }
  }


  onDrop = (acceptedFiles, rejectedFiles) => {
    this.props.onDrop(acceptedFiles, rejectedFiles)
  }


  handleNewActivity = () => {
    fetch(`${APIURL}api/upload`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.form),
    }).then((resp) => {
        return resp.json()
    }).then(resp => {
      console.log("response", resp);
    })
}

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt="uploaded preview" />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }



    return (
      <div className="previewComponent imagepreview">
        <Row>
            <FormGroup id = "image-form-group">
            <ControlLabel id="image">Image</ControlLabel>

              <div className="image-upload-div">
                <Dropzone
                  className='dropzone'
                  accept='image/*'
                  onDrop={(files) => {
                  this.onDrop(files)
                 }}
                >
                  <div className='dropzone-text'>
                    <p>Try dropping some image files here, or click me to select files to upload.</p>
                    <br/>
                    <p>By uploading you are agreeing that you either own the image yourself, or are using an image with written permissions to share it.</p>
                  </div>
                </Dropzone>
              </div>
            <br/>
            <div>
             {/* File Preview: */}
              {/* {this.state.form.image.name !== '' &&
                <div>

                  <img src={this.state.form.image.data} className="image-preview" alt="preview" />
                  <p>{this.state.form.image.name}.{this.state.form.image.extension}</p>
                  <br/>
                </div>
              } */}
            </div>
          </FormGroup>

      </Row>

      </div>
    )
  }
}

export default ImageUpload
