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
    {meta.error &&
      meta.touched &&
      <span>
        {meta.error}
      </span>
    }
    <label>
      {label}
    </label> <br />
    {render(input, label, rest)}

  </div>

const RenderInput = createRenderer((input, label, { type }) =>
  <input {...input} placeholder={label} type={type} className="sign-up"/>
)


let SignUpForm = ({ handleSubmit, submitting }) =>

<div className="flex-test flex-container">
    <center>
        <form onSubmit={handleSubmit(createUser)}>
          <Field name="firstName" label="First Name" type="text" component={RenderInput} /> <br />
          <Field name="lastName" label="Last Name" type="text" component={RenderInput} /> <br />
          <Field name="email" label="Email" type="text" component={RenderInput} /> <br />
          <Field name="password" label="Password" type="password" component={RenderInput} />
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
