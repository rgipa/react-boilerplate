import React from 'react'
import { useForm } from 'react-hook-form'
import { observer } from 'mobx-react'

import authModule from 'Module/auth'

import Input from 'Component/molecule/Input'
import Button from 'Component/atom/Button'

export default observer(() => {
  const { register, handleSubmit, formState } = useForm()

  const onSubmit = React.useCallback((values) => {
    return authModule.login(values)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="username" ref={register} />
      <Input name="password" type="password" ref={register} />
      <Button
        label={'Login'}
        isLoading={formState.isSubmitting}
        type="submit"
      />
    </form>
  )
})
