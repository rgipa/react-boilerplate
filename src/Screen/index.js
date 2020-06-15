import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'

import authModule from 'Module/auth'

import HomeScreen from 'Screen/Home'
import CultureScreen from 'Screen/Culture'
import WorkScreen from 'Screen/Work'
import ContactScreen from 'Screen/Contact'
import TodoDetailsScreen from 'Screen/TodoDetails'
import LoginScreen from 'Screen/Login'
import PageNotFoundScreen from 'Screen/PageNotFound'
import FormScreen from 'Screen/Form'

export default observer(() => {
  if (!authModule.state.token) {
    // not logged in
    return (
      <Switch>
        <Route path="/login" component={LoginScreen} />
        <Redirect path={'/'} exact to={'/login'} />
        <Route component={PageNotFoundScreen} />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/home" component={HomeScreen} />
      <Route path="/form" component={FormScreen} />
      <Route path="/culture" component={CultureScreen} />
      <Route path="/work" component={WorkScreen} />
      <Route path="/contact" component={ContactScreen} />
      <Route path="/todo/:id" component={TodoDetailsScreen} />
      <Redirect path={'/login'} to={'/home'} />
      <Redirect path={'/'} exact to={'/home'} />
      <Route component={PageNotFoundScreen} />
    </Switch>
  )
})
