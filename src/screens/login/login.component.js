import React from 'react'
import { useForm } from 'react-hook-form'

import { actions as AuthActions } from 'shared/stores/auth.store'
import Input from 'shared/components/input/input.component'
import Button from 'shared/components/button/button.component'

import style from './login.module.scss'

const Login = () => {
  const { register, handleSubmit, formState } = useForm()

  const onSubmit = React.useCallback((values) => {
    return AuthActions.login(values)
  }, [])

  return (
    <div className={style.container}>
      <div className={style.loginForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input name="username" ref={register} data-test-id="username" />
          <Input
            name="password"
            type="password"
            ref={register}
            data-test-id="password"
          />
          <Button
            label={'Login'}
            isLoading={formState.isSubmitting}
            type="submit"
            data-test-id="submit"
          />
        </form>
      </div>
    </div>
  )
}

export default Login
