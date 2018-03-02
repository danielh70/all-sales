import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/navbar';
import { getItems } from '../actions/items'
import '../App.css';


const mapStateToProps = (store) => {
  return({
    items: store.items.all,
    APIURL: store.APIURL
  })
}
export default connect(mapStateToProps)(class Shopping extends Component {

  componentWillMount(){
  this.props.dispatch(getItems(this.props.APIURL))
  }

    render() {
      return (
        <div>
          <NavBar />

          {this.props.items.map((el, i) => {
            return (
              <h5 key={i}>{el.name}</h5>
            )
          })}

        </div>
      );
    }
  }
)

//
// if (this.props.items.length === 0) {
//   return (
//     <div className="container">
//       <div className="grid">
//         <h1>Loading...</h1>
//       </div>
//     </div>
//   )
// }
