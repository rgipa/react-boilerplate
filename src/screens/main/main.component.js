import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from 'components/header/header.component'
import Footer from 'components/footer/footer.component'
import Culture from 'screens/culture/culture.component'
import Contact from 'screens/contact/contact.component'

import Examples from 'modules/examples/examples.component'

import style from './main.module.scss'

const Main = (props) => {
  return (
    <div className={style.container}>
      <Header />
      <div className={`${style.content}`}>
        <Switch>
          <Route path={`${props.match.path}culture`} component={Culture} />
          <Route path={`${props.match.path}contact`} component={Contact} />
          <Route path={`${props.match.path}examples`} component={Examples} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default Main
