import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, redirect, submitItems, startLoading, stopLoading, showModal, hideModal } from '../actions/items'
import { Row, Col } from 'react-bootstrap';
import { setLoginStatus } from '../actions/userForm'
import NavBar from '../components/navbar';
import ItemCard from '../components/item-card';
import ItemModal from '../components/item-modal';
import { Loader } from './Loader';
import Checkbox from '../components/checkbox';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../App.css';


const mapDispatchToProps = (dispatch) => {
  return {
    setLoginStatus: () => {
      dispatch(setLoginStatus()).then(res => {
        dispatch(getItems())
      })
    },
    submitItems: (selected) => {
      dispatch(submitItems(selected))
    },
    redirect: () => {
      dispatch(redirect())
    },
    startLoading: () => {
      dispatch(startLoading())
    },
    stopLoading: () => {
      dispatch(stopLoading())
    },
    showModal: () => {
      dispatch(showModal())
    },
    hideModal: () => {
      dispatch(hideModal())
    }
  }
}


function mapStateToProps(state) {
  return {
    authorized: state.authorized,
    items: state.items
  }
}

class Shopping extends Component {

  componentWillMount() {
    this.props.startLoading();
    this.props.setLoginStatus();
  }

  componentDidMount() {
    this.props.stopLoading();
  }

  redirect = () => {
   this.props.redirect()
  }

  handleModal = () => {
    const { modal, showModal, hideModal, items } = this.props

    items.modal ? hideModal() : showModal()
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    let id = parseInt(e.target.id)
    let selected = [id]
    console.log(selected)
    this.props.submitItems(selected)
    this.redirect()
   }



  render() {
    const { items } = this.props

    let yes = true;

    console.log("all items****************************", this.props.items);

    return (
      <div>
        <NavBar />
        <h1 className="move-left">
          Welcome <span id="user-name">{this.props.authorized.user.firstName}!</span>
        </h1>

        <h3 className="white-text-shadow move-left">Add items to your cart:</h3>

        { (items.loading || items.all.length === 0) && <Loader /> }

        <div className="container">
          <div className="grid">

            { items.all.map((el, i) => {
              return (

                <ItemCard
                  key={el.id}
                  id={el.id}
                  image={el.url}
                  title={el.name}
                  description={el.description}
                  handleSubmit={this.handleFormSubmit}
                  handleModal={this.handleModal}
                />

              )
            })}

          </div>
        </div>
        <br />
        <br />

        <ItemModal show={this.props.items.modal} onHide={this.handleModal} />
        { this.props.items.redirect && <Redirect to="/cart" /> }
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shopping)


{/* <center>
  {this.props.items.all.map((el, i) => {
    return (
      <a href={el.url}> clicker here </a>
    )
  })}
  <form onSubmit={this.handleFormSubmit} id="checkbox-form">
       { this.createCheckboxes() }


    {
    this.selectedCheckboxes &&
      <button className="checkbox-form-button move-left" type="submit">Add to cart</button>
    }

    { items.redirect && <Redirect to="/cart" /> }
    </form>
  </center> */}
