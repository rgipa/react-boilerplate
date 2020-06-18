import React from 'react'

import WithSubscription from 'shared/hocs/withSubscription/withSubscription.component'
import {
  state as StateState,
  actions as StateActions,
} from 'modules/examples/stores/state.store'

const AsyncStore = (props) => {
  const handleGetUser = () => {
    StateActions.getUser()
  }

  return (
    <div>
      <button type="button" onClick={handleGetUser}>
        Get User
      </button>
      <br />
      isLoading: {props.store.isUserLoading ? 'true' : 'false'}
      <br />
      user name: {props.store.user.name}
    </div>
  )
}

// TODO Q: what if i want to subscribe to multiple states
export default WithSubscription(AsyncStore, StateState)
