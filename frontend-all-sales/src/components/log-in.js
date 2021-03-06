import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { login } from '../actions/userForm'
import validate from './validate'

const createRenderer = render => ({ input, meta, label, ...rest }) =>
  <div
    className={[
      meta.error && meta.touched ? 'error' : '',
      meta.active ? 'active' : ''

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


let LoginForm = ({ handleSubmit, submitting }) =>

<div className="flex-test flex-container">

        <form onSubmit={handleSubmit(login)}>
          <Field name="email" label="Email" type="text" component={RenderInput} /> <br />
          <Field name="password" label="Password" type="password" component={RenderInput} />
          <br />
          <button type="submit" className="checkbox-form-button" disabled={submitting}>
            Log In
          </button>
        </form>

</div>
LoginForm = reduxForm({
  form: 'UserLogin',
  destroyOnUnmount: true,
  validate
})(LoginForm)

export default LoginForm
