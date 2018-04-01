import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'
import { mount, shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoggedOutNav from '../components/logged-out-nav';
import { Provider, connect } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import store from '../store'

Enzyme.configure({ adapter: new Adapter() });


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test('', () => {
//   let cp = shallow(<Provider store={store}><App /></Provider>)
// })
