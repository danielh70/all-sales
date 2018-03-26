import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, redirect, submitItems, startLoading, stopLoading, showModal, hideModal } from '../actions/items';
import { setLoginStatus } from '../actions/userForm'
import NavBar from '../components/navbar';
import ItemCard from '../components/item-card';
import ItemModal from '../components/item-modal';
import { Loader } from './Loader';
import { Redirect } from 'react-router-dom';
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
    showModal: (e) => {
      dispatch(showModal(e))
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
// zzz


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

  handleModal = (e) => {
    const { modal, showModal, hideModal, items } = this.props
    let id = parseInt(e.target.id)

    items.modal ? hideModal() : showModal(id)
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

    // console.log("all items****************************", items);

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

        { items.modal &&
          <ItemModal
          show={items.modal}
          onHide={this.handleModal}
          item={items.all[items.selectedItem - 1]}
         />
       }

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
