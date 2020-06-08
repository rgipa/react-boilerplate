import React from 'react'
import NavLinks from 'Component/molecule/NavLinks'

import style from './style.module.scss'

export default ({ navLinks }) => (
  <div className={style.appFooter}>
    <NavLinks links={navLinks} className={style.nav} />
  </div>
)
