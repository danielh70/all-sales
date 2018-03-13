import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoggedOutNav from '../components/logged-out-nav';
import { Provider, connect } from 'react-redux';
import store from '../store'

Enzyme.configure({ adapter: new Adapter() });

// test('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// test('shows components', () => {
//   const component = mount(<App />)
//
//
// })
