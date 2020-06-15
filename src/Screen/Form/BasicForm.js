import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'

import ErrorText from 'Component/atom/ErrorText'

const ErrorField = ({ name, errors, messages }) => {
  if (!errors[name]) return null

  const errorMessages = {
    required: 'This field is required',
    maxLength: 'Max length reached',
    minLength: 'Min length required',
    pattern: 'Invalid pattern',
    ...messages,
  }

  return <ErrorText>{errorMessages[errors[name].type] || 'Error'}</ErrorText>
}

export default function App() {
  const { register, handleSubmit, control, errors } = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'skills',
  })

  const onSubmit = React.useCallback((values) => console.log({ values }), [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          ref={register({ required: true, maxLength: 80 })}
        />
        <ErrorField
          name="firstName"
          {...{ errors }}
          messages={{
            required: 'First name is required',
            maxLength: 'Must not exceed 80 characters',
          }}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          ref={register({ required: true, maxLength: 100 })}
        />
        <ErrorField
          name="lastName"
          {...{ errors }}
          messages={{
            required: 'Last name is required',
            maxLength: 'Must not exceed 100 characters',
          }}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
        />
        <ErrorField
          name="email"
          {...{ errors }}
          messages={{
            required: 'Email is required',
            pattern: 'Invalid email address',
          }}
        />
      </div>
      <div>
        <label>Mobile Number</label>

        <input
          type="tel"
          placeholder="Mobile number"
          name="mobileNumber"
          ref={register({ required: true, minLength: 6, maxLength: 12 })}
        />

        <ErrorField
          name="mobileNumber"
          {...{ errors }}
          messages={{
            required: 'Mobile number is required',
            minLength: 'Invalid mobile number',
            maxLength: 'Invalid mobile number',
          }}
        />
      </div>
      <div>
        <label>Title</label>
        <select name="Title" ref={register({ required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
      </div>
      <div>
        <label>Is developer?</label>
        <input
          name="isDeveloper"
          type="radio"
          value="Yes"
          ref={register({ required: true })}
        />
        <input
          name="isDeveloper"
          type="radio"
          value="No"
          ref={register({ required: true })}
        />
        <ErrorField
          name="isDeveloper"
          {...{ errors }}
          messages={{
            required: 'Please choose',
          }}
        />
      </div>

      <div>
        <ul>
          {fields.map((item, index) => (
            <li key={item.id}>
              <input
                name={`skills[${index}]`}
                defaultValue={item.name}
                ref={register()}
              />
              <button onClick={() => remove(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <section>
          <button type="button" onClick={() => append()}>
            Add field
          </button>
        </section>
      </div>
      <input type="submit" />
    </form>
  )
}
