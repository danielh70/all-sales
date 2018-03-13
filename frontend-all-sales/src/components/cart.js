import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/items'
import NavBar from '../components/navbar';
import { Loader } from '../presentation/Loader'
import '../App.css';
import { setLoginStatus } from '../actions/userForm'
import { getUserItems } from '../actions/items'


const mapStateToProps = (store) => {
  return {
    APIURL: store.appState.APIURL,
    authorized: store.authorized,
    items: store.items.currentUser
  }
}

export default connect(mapStateToProps)(class Cart extends Component {

  componentWillMount() {
    this.props.dispatch(setLoginStatus(this.props.APIURL))
    this.props.dispatch(getUserItems(this.props.APIURL))
  }
  //
  // componentDidMount() {
  //   this.listItems()
  // }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps:", nextProps);

  }

  // listItems = () => {
  //   this.props.items.map(el => (
  //       <h3>{el.itemId}</h3>
  //     )
  //   )
  // }


    render() {
      console.log("STATUS:", this.props.authorized.authToken)
      console.log("CURRENT USER ITEMS:", this.props.items)


      return (
        <div>
          <NavBar />
          <h1>Welcome {this.props.authorized.user.firstName}!</h1>
          <h3>
            Current items in your cart:
          </h3>
          {
            this.props.items.map(el => {
              return (
                el.itemId
              )
            })
          }
        </div>
      )
    }
  }
)
