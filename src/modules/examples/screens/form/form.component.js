import React from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import { DevTool } from 'react-hook-form-devtools'

import ErrorText from 'shared/components/form/errorText/errorText.component'
import 'react-datepicker/dist/react-datepicker.css'

const ErrorField = ({ error, messages }) => {
  if (!error) {
    return null
  }

  const errorMessages = {
    required: 'This field is required',
    maxLength: 'Max length reached',
    minLength: 'Min length required',
    pattern: 'Invalid pattern',
    ...messages,
  }

  return <ErrorText>{errorMessages[error.type] || 'Error'}</ErrorText>
}

const Form = (props) => {
  const { register, handleSubmit, control, errors } = useForm()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'skills',
  })

  const onSubmit = React.useCallback((values) => console.log({ values }), [])

  return (
    <>
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
            error={errors['firstName']}
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
            error={errors['lastName']}
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
            error={errors['email']}
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
            error={errors['mobileNumber']}
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
            error={errors['isDeveloper']}
            messages={{
              required: 'Please choose',
            }}
          />
        </div>

        <div>
          <div>
            <label>Tell something about yourself</label>
          </div>
          <textarea
            name="about"
            ref={register({ required: true, minLength: 50 })}
          ></textarea>
          <ErrorField
            error={errors['about']}
            messages={{
              required: 'Please tell something about yourself',
              minLength: 'Atleast 100 characters',
            }}
          />
        </div>

        <div>
          <label>Birthdate:</label>
          <Controller
            name="birthdate"
            control={control}
            onChangeName="onChange"
            valueName="selected"
            as={DatePicker}
            rules={{
              validate: {
                minDate: (value) => {
                  if (!value) return true

                  if (value.getTime() > Date.now()) {
                    return false
                  }

                  return true
                },
              },
              required: true,
            }}
          />
          <ErrorField
            error={errors['birthdate']}
            messages={{
              required: 'Please specify your birthdate',
              minDate: 'Date must not be in the future',
            }}
          />
        </div>

        <div>
          <label>Skills</label>
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

        <div>
          <div>
            <input
              type={'checkbox'}
              name="accept"
              ref={register({
                required: true,
              })}
            />
            <label>Accept Terms and condition</label>
          </div>
          <ErrorField
            error={errors['accept']}
            messages={{
              required: 'Please accept terms and condition',
            }}
          />
        </div>

        <input type="submit" />
      </form>

      <DevTool {...{ control }} />
    </>
  )
}

export default Form
