import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import validate from './validate';
// import items from './data/list-items';
// import showResults from '../actions/items';
import ImageUpload from './image-upload';
import { Redirect } from 'react-router-dom';
//
// const mapStateToProps = (store) => {
//
// }

const APIURL = process.env.NODE_ENV === 'production' ? "/" : "http://localhost:3000/";

class NewPostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name:       '',
        description: '',
        price:       '',
        contact:     '',
        image: {
          name:      '',
          data:      '',
          extension: ''
        }
      },
      images: [],
      file: '',
      imagePreviewUrl: '',
      success: false
    }
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("component will update", nextState);
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


             // this.setState(multipleImg)

             this.setState({
               form: Object.assign({}, form, {
                 image: image,
               })

             })
           }

           this.state.images.push(image)

           reader.onabort = () => console.log('image reading was aborted')
           reader.onerror = () => console.log('image reading has failed')

           reader.readAsDataURL(file)
         })
     }


  handleInputChange = (e) => {
    const state = { ...this.state.form }
    state[e.target.name] = e.target.value
    this.setState({ form: state })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${APIURL}api/upload`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.form),
    })
    .then(res => {
      this.redirect()
    })

    console.log("Submitted:", this.state)
  }

  redirect = () => {
    this.setState({ success: true })
  }

  // handleImageChange = (e) => {
  //
  // }
  //




  render() {
    const { name, price, description, image } = this.state.form
    const { data, extension } = image

    console.log("current state:", this.state);
    return (
      <div className="new-post-grid">

        <div className="new-post a">

        </div>
        <div className="new-post b">

        </div>
        <form onChange={this.handleInputChange} onSubmit={this.handleSubmit}>
          <div className="new-post c">
            <input type="text" name="name" placeholder="Name" value={name} className="sign-up" />
            <br /> <br />
            <input type="number" name="price" placeholder="Price" value={price} className="sign-up" />
            <br /> <br />
            <textarea type="text" name="description" placeholder="Description" value={description} className="sign-up" />
          </div>

          <div className="new-post d">
            <button type='submit' className="checkbox-form-button">Submit form</button>
          </div>
          <div className="new-post e">

          </div>
          <div className="new-post f">
            <ImageUpload
              onDrop={this.onDrop}
              handleNewActivity={this.handleNewActivity}
            />
          </div>
        </form>
        <div className="new-post g">

        </div>
        <div className="new-post h">
          { this.state.images[1] &&
            <div>
            <img src={this.state.images[1].data} className="image-preview" alt="preview" />
            <p>{this.state.images[1].name}.{this.state.images[1].extension}</p>
            </div>
          }

        </div>
        <div className="new-post i">
          File Preview:
           {this.state.form.image.name !== '' &&
             <div>

               <img src={this.state.images[0].data} className="image-preview" alt="preview" />
               <p>{image.name}.{extension}</p>
               <br/>
             </div>
           }
        </div>
        <div className="new-post j">
          { this.state.images[2] &&
            <div>
            <img src={this.state.images[2].data} className="image-preview" alt="preview" />
            <p>{this.state.images[2].name}.{this.state.images[2].extension}</p>
            </div>
          }

        </div>
        { this.state.success && <Redirect to="/shopping" /> }
      </div>
    )
  }
}

export default NewPostForm
