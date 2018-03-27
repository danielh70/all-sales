import React, { Component } from 'react';
import NavBar from '../components/navbar';
import NewPostForm from '../components/new-post-component';
// import ImageUpload from '../components/image-upload';
import { connect } from 'react-redux';
import { setLoginStatus } from '../actions/userForm';


const mapStateToProps = (store) => {
  return {
    // APIURL: store.appState.APIURL,
    authorized: store.authorized.loggedIn
  }
}


class NewPostPage extends Component {
  //
  // componentWillMount() {
  //   this.props.dispatch(setLoginStatus(this.props.APIURL))
  // }


  render() {
    return (
      <div>
        <NavBar />

        <NewPostForm />


      </div>
    )
  }
}
export default connect(mapStateToProps)(NewPostPage)
