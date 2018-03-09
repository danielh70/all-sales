import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { userLogin } from '../actions/userForm'
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

const RenderInput = createRenderer((input, label) =>
  <input {...input} placeholder={label} className="sign-up"/>
)


let LoginForm = ({ handleSubmit, submitting }) =>

<div className="flex-test flex-container">
    <center>
        <form onSubmit={handleSubmit(userLogin)}>
          <Field name="email" label="Email" component={RenderInput} /> <br />
          <Field name="password" label="Password" component={RenderInput} />
          <br />
          <button type="submit" disabled={submitting}>
            Submit
          </button>
        </form>
    </center>

</div>
LoginForm = reduxForm({
  form: 'UserLogin',
  destroyOnUnmount: true,
  validate
})(LoginForm)


export default LoginForm;
