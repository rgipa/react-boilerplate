import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import WithSubscription from 'shared/hocs/withSubscription/withSubscription.component'
import { state as AuthState } from 'shared/stores/auth.store'
import LoginComponent from 'screens/login/login.component'
import Main from 'screens/main/main.component'
import PageNotFound from 'screens/pageNotFound/pageNotFound.component'

const App = (props) => {
  const renderRoutes = () => {
    if (!props.store.token) {
      return (
        <>
          <Route path="/login" component={LoginComponent} />
          <Redirect path={'/'} exact to={'/login'} />
        </>
      )
    } else {
      return (
        <>
          <Route strict path="/" component={Main} />
        </>
      )
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        {renderRoutes()}
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default WithSubscription(App, AuthState)
