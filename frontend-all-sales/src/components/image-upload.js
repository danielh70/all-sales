import React, { Component } from 'react';
import { Button, FormGroup, Col, Row, ControlLabel } from 'react-bootstrap';
import Dropzone from 'react-dropzone'
import '../App.css';

const APIURL = 'http://localhost:3000/';
const upload = require('superagent')
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

  uploadImage(imageFile) {
  return new Promise((resolve, reject) => {
    let imageFormData = new FormData();

    imageFormData.append('imageFile', imageFile);

    var xhr = new XMLHttpRequest();

    xhr.open('post', '/upload', true);

    xhr.onload = function () {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        reject(this.statusText);
      }
    };

    xhr.send(imageFormData);

  });
}

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);

  }

  onDrop = (acceptedFiles, rejectedFiles) => {
         const { form } = this.state
         acceptedFiles.forEach(file => {
           console.log("file", file);
           let { name, type } = file

           type = type.split('/')[1]
           console.log("name:", name, " type:", type)

           let image = {
             extension: type,
             name: name,
           }

           const reader = new FileReader()

           reader.onload = () => {
             image.data = reader.result

             this.setState({
               form: Object.assign({}, form, {
                 image: image,
               })
             })
           }

           reader.onabort = () => console.log('image reading was aborted')
           reader.onerror = () => console.log('image reading has failed')

           reader.readAsDataURL(file)
         })
     }

  handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
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
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    console.log(this.state);

    return (
      <div className="previewComponent">
        <Row>
          <Col xs={10} >
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
             File Preview:
              {this.state.form.image.name !== '' &&
                <div>
                  <pre>{JSON.stringify(this.state.form.image)}</pre>
                  <img src={this.state.form.image.data} className="image-preview" alt="preview" />
                  <p>{this.state.form.image.name}.{this.state.form.image.extension}</p>
                  <br/>
                </div>
              }
            </div>
          </FormGroup>
        </Col>
      </Row>

     <Button onClick={this.handleNewActivity}>click</Button>
      </div>
    )
  }
}

export default ImageUpload
//
// <Dropzone
//   className='dropzone'
//   accept='image/*'
//   onDrop={(files) => {
//     this.onDrop(files)
//   }}
// />
// <form onSubmit={this.handleSubmit}>
//   <input className="fileInput"
//     type="file"
//     onChange={this.handleImageChange} />
//   <Button className="submitButton"
//     type="submit"
//     onClick={this.handleNewActivity}>Upload Image</Button>
// </form>
// <div className="imgPreview">
//   {$imagePreview}
// </div>
