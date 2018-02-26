import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from '../components/navbar';
import SignUp from '../components/sign-up';

Enzyme.configure({ adapter: new Adapter() });
//
// test('has a email input')
// test('has a password input')
// test('has a first name input')
// test('has a last name input')
//
// test('calls submitHandler on submit', () => {
//   const mockSubmitHandler = jest.fn()
//   const component = mount(<SignUp onSubmit={mockSubmitHandler} />)
//   component.find('button#submit').simulate('click', {button: 0})
//   expect(mockSubmitHandler.mock.calls.length).toBe(1)
// })
//
// test('passes values on submit', () => {
//   const mockSubmitHandler = jest.fn()
//   const component = mount(<SignUp onSubmit={mockSubmitHandler} />)
//   component.find('input[name="firstName"]').simulate('change', {target: {value: 'George', name: 'firstName'}})
//   component.find('input[name="lastName"]').simulate('change', {target: {value: 'Darwin', name: 'lastName'}})
//   component.find('input[name="email"]').simulate('change', {target: {value: 'something@test.com', name: 'email'}})
//   component.find('input[name="password"]').simulate('change', {target: {value: 'passw0rd', name: 'password'}})
//   component.find('button#submit').simulate('click', {button: 0})
//
//   const submittedValues = mockSubmitHandler.mock.calls[0][0]
//   expect(submittedValues["firstName"]).toBe("George")
//   expect(submittedValues["lastName"]).toBe("Darwin")
//   expect(submittedValues["email"]).toBe("something@test.com")
//   expect(submittedValues["password"]).toBe("passw0rd")
// })

test('')
