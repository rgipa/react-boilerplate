import React from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'

import NavLink from 'Component/atom/NavLink'

import AppShell from 'Container/AppShell'
import TodoDetails from 'Container/TodoDetails'

import Tab1 from './container/tabs/Tab1'
import Tab2 from './container/tabs/Tab2'
import Tab3 from './container/tabs/Tab3'

import style from './style.module.scss'

export default () => {
  const match = useRouteMatch()

  return (
    <AppShell>
      <TodoDetails id={match.params.id} />
      <div className={style.tabContainer}>
        <div>
          <NavLink href={'./tab1'} replace>
            Tab 1
          </NavLink>
          <NavLink href={'./tab2'} replace>
            Tab 2
          </NavLink>
          <NavLink href={'./tab3'} replace>
            Tab 3
          </NavLink>
        </div>
        <div>
          <Switch>
            <Route path={`${match.url}/tab1`} exact component={Tab1} />
            <Route path={`${match.url}/tab2`} exact component={Tab2} />
            <Route path={`${match.url}/tab3`} exact component={Tab3} />
            <Redirect to={`${match.url}/tab1`} />
          </Switch>
        </div>
      </div>
    </AppShell>
  )
}
