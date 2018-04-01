// import React from 'react';
// import { connect } from 'react-redux';
// import { getItems, redirect, submitItems, startLoading, stopLoading, showModal, hideModal } from '../actions/items';
// import { setLoginStatus } from '../actions/userForm';
// import Shopping from '../presentation/shopping';
// 
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setLoginStatus: () => {
//       dispatch(setLoginStatus()).then(res => {
//         dispatch(getItems())
//       })
//     },
//     submitItems: (selected) => {
//       dispatch(submitItems(selected))
//     },
//     redirect: () => {
//       dispatch(redirect())
//     },
//     startLoading: () => {
//       dispatch(startLoading())
//     },
//     stopLoading: () => {
//       dispatch(stopLoading())
//     },
//     showModal: (e) => {
//       dispatch(showModal(e))
//     },
//     hideModal: () => {
//       dispatch(hideModal())
//     }
//   } 
// }
// 
// function mapStateToProps(state) {
//   return {
//     authorized: state.authorized,
//     items: state.items
//   }
// }
// 
// export default connect(mapStateToProps, mapDispatchToProps)(Shopping);
