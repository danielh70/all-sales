import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/items'
import NavBar from '../components/navbar';
import { Loader } from '../presentation/Loader'
import '../App.css';
import { setLoginStatus } from '../actions/userForm'
import { getUserItems, removeCartItem } from '../actions/items'
import { Button, Col } from 'react-bootstrap';


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

  removeItem = (e) => {
    let itemId = [e.target.value];
    let itemIdNum = parseInt(itemId)
    let token = this.props.authorized.authToken;
    // console.log("item id:", itemIdNum);

    let removeThisItem = itemIdNum =>
       this.props.items.filter(el =>
          el.id !== itemIdNum
      )
    this.props.dispatch(removeCartItem(removeThisItem(itemIdNum)))

    fetch(`${this.props.APIURL}api/items/user/delete?authToken=${token}`,
      {
        body: JSON.stringify(itemId),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "DELETE"
      }
    )
    .then(res => {
      return res.json()
    })
    .catch(e => console.log(e))
  }



    render() {
      console.log("CURRENT USER ITEMS:", this.props.items)

      return (
        <div>
          <NavBar />

          <h1>Welcome <span id="user-name">{this.props.authorized.user.firstName}!</span></h1>
          {
            this.props.authorized.loggedIn && <h3>
            <span className="white-text-shadow">Current items in your cart:</span>
          </h3>
          }

          {
            !this.props.authorized.loggedIn &&
            <h3 className="white-text-shadow">Please log in to use the shopping cart feature.</h3>
          }

          <center>
            <table id="cart-table" className="margin-5">
              {
                this.props.items.map(el => {
                  return (
                    <tbody key={el.itemId}>
                      <tr className="margin-5 padding-5">
                        <td className="margin-5 padding-5" id={el.itemId}>
                          ID: {el.itemId}
                        </td>
                        <td className="margin-5 padding-5">
                          Name: {el.name}
                        </td>
                        <td>
                          <button onClick={this.removeItem} value={el.itemId} className="delete-button">Remove Item</button>
                        </td>
                      </tr>
                    </tbody>
                  )
                })
              }
            </table>
          </center>
        </div>
      )
    }
  }
)
