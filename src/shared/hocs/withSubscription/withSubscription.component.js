import React from 'react'
import { observer } from 'mobx-react'

const WithSubscription = (WrappedComponent, store) => {
  const ObservedComponent = observer(WrappedComponent)
  const Component = () => {
    return <ObservedComponent store={store} />
  }
  return Component
}

export default WithSubscription
