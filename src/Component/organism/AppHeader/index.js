import React from 'react'
import NavLinks from 'Component/molecule/NavLinks'

import style from './style.module.scss'

export default ({ logo, navLinks }) => (
  <div className={style.appHeader}>
    <div>{logo}</div>
    <NavLinks links={navLinks} className={style.nav} />
  </div>
)
