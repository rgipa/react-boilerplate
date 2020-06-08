import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import HomeScreen from 'Screen/Home'
import CultureScreen from 'Screen/Culture'
import WorkScreen from 'Screen/Work'
import ContactScreen from 'Screen/Contact'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={HomeScreen} />
      <Route path="/culture" component={CultureScreen} />
      <Route path="/work" component={WorkScreen} />
      <Route path="/contact" component={ContactScreen} />
      <Redirect to={'/home'} />
    </Switch>
  </BrowserRouter>
)
