import React, { Component } from 'react';
import NavBar from '../components/navbar';
import SignUp from '../components/sign-up';
import { Redirect } from 'react-router-dom';


export const SignUpPage = () => {
  return (
    <div>
      <SignUp />
    </div>
  )
}
