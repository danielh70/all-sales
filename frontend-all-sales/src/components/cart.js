import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/navbar';
import '../App.css';
import { setLoginStatus } from '../actions/userForm';
import { getUserItems, removeCartItem } from '../actions/items';


const mapDispatchToProps = (dispatch) => {
  return {
    removeCartItem: (e, nextState) => {
        dispatch(removeCartItem(e, nextState))
      },
      setLoginStatus: () => {
        dispatch(setLoginStatus()).then(res => {
          dispatch(getUserItems())
        })
      }
    }
  }

const mapStateToProps = (store) => {
  return {
    items: store.items.currentUser,
    authorized: store.authorized
  }
}

class Cart extends Component {

  componentDidMount() {
    this.props.setLoginStatus()
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

      console.log(removeThisItem(2));

      this.props.removeCartItem(itemIdNum, removeThisItem(itemIdNum))
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

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
