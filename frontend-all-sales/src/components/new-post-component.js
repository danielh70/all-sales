import React from 'react'
import { reduxForm, Field } from 'redux-form'
import validate from './validate'
import items from './data/list-items'
import showResults from '../actions/items'
import { Redirect } from 'react-router-dom'

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

const RenderText = createRenderer((input, label) =>
  <textarea {...input} placeholder={label} className="sign-up" />
)

const RenderSelect = createRenderer((input, label, { children }) =>
  <select {...input}>
    {children}
  </select>
)


let NewPostForm = ({ handleSubmit, submitting, authorized }) =>
<div className="flex-test flex-container">
    <center>
        <form onSubmit={handleSubmit(showResults)}>
          <Field name="title" label="Title" type="text" component={RenderInput} /> <br />
          <Field name="price" label="Price" type="number" component={RenderInput} /> <br />
          <Field name="description" label="Description" type="text" component={RenderText} /> <br />
          <Field name="condition" label="Condition" component={RenderSelect}>
          {items.map(item =>
            <option key={item} value={item}>
              {item}
            </option>
           )}
         </Field>
          <br />
          <button type="submit" className="checkbox-form-button" disabled={submitting}>
            Create Post
          </button>
        </form>
    </center>
</div>

NewPostForm = reduxForm({
  form: 'NewPostForm',
  destroyOnUnmount: true,
  validate
})(NewPostForm)


export default NewPostForm;
