import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/items'
import NavBar from '../components/navbar';
import { Loader } from '../presentation/Loader'
import '../App.css';
import { setLoginStatus } from '../actions/userForm'
import { getUserItems } from '../actions/items'
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
          <center>

          <table id="cart-table" className="margin-5">

            {
              this.props.items.map(el => {
                return (
                  <div>
                  <tr className="margin-5 padding-5">
                    <td className="margin-5 padding-5">
                      ID: {el.itemId}
                    </td>
                    <td className="margin-5 padding-5">
                      Name: {el.name}
                    </td>
                    <td>
                      <Button className="margin-5" id="shop-button">Remove Item</Button>
                    </td>
                  </tr>
                  </div>
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
