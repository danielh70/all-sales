import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { createUser } from '../actions/userForm'
import validate from './validate'


const createRenderer = render => ({ input, meta, label, ...rest }) =>
  <div
    className={[
      meta.error && meta.touched ? 'error' : '',
      meta.active ? 'active' : '', 'sign-up',

    ].join(' ')}
  >
    <label>
      {label}
    </label> <br />
    {render(input, label, rest)}
    {meta.error &&
      meta.touched &&
      <span>
        {meta.error}
      </span>
    }
  </div>

const RenderInput = createRenderer((input, label) =>
  <input className="App" {...input} placeholder={label} className="animated fadeIn"/>
)


let SignUpForm = ({ handleSubmit, submitting }) =>

<div className="flex-test flex-container">
    <center>
        <form onSubmit={handleSubmit(createUser)}>
          <Field name="firstName" label="First Name" component={RenderInput} /> <br />
          <Field name="lastName" label="Last Name" component={RenderInput} /> <br />
          <Field name="email" label="Email" component={RenderInput} /> <br />
          <Field name="password" label="Password" component={RenderInput} />
          <br />
          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </form>
    </center>

</div>
SignUpForm = reduxForm({
  form: 'UserSignup',
  destroyOnUnmount: true,
  validate
})(SignUpForm)


export default SignUpForm;
// const RenderSelect = createRenderer((input, label, { children }) =>
//   <select {...input}>
//     {children}
//   </select>
// )
