import React from 'react'
import { useForm } from 'react-hook-form'
import { observer } from 'mobx-react'

import authModule from 'Module/auth'

import Input from 'Component/molecule/Input'
import Button from 'Component/atom/Button'

export default observer(() => {
  const { register, handleSubmit, formState } = useForm()

  const onSubmit = React.useCallback((values) => authModule.login(values), [])

  return (
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
  )
})
