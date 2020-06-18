import React from 'react'
import { useState } from 'react'

import MobxService from 'modules/examples/services/api/mobx.service'

const AsyncLocal = (props) => {
  const [isUserLoading, setUserLoading] = useState(false)
  const [user, setUser] = useState({})

  const handleGetUser = () => {
    setUserLoading(true)
    MobxService.getUser().then((response) => {
      setUser(response.data.user)
      setUserLoading(false)
    })
  }

  return (
    <div>
      <button type="button" onClick={handleGetUser}>
        Get User
      </button>
      <br />
      isLoading: {isUserLoading ? 'true' : 'false'}
      <br />
      user name: {user.name}
    </div>
  )
}

export default AsyncLocal
