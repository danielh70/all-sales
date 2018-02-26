import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from '../components/navbar';

Enzyme.configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('header shows', () => {
  const app = mount(<App />)
  expect(app.find('.header').text()).toEqual('Welcome')
})

test('navbar renders', () => {
  const app = mount(<NavBar />)
  expect(app.find('.shop-text').length).toEqual(2)
})

test('log in text shows on navbar', () => {
  const app = mount(<NavBar />)
  expect(app.find('NavItem > .log-in-nav').text()).toEqual('Log In')
})

test('sign up text shows on navbar', () => {
  const app = mount(<NavBar />)
  expect(app.find('NavItem > .sign-up-nav').text()).toEqual('Sign Up')
})


// test('see all items button works', () => {
//   const app = mount(<App />)
//   app.find('.shop-text').simulate('click')
//   expect(app.find())
// })

test('shopping page renders items list', () => {
})
test('home page shows exactly 3 items')
