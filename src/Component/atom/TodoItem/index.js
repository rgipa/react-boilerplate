import React from 'react'
import NavLink from 'Component/atom/NavLink'

import style from './style.module.scss'

export default ({ className = null, todo, href }) => (
  <div className={`${className} ${style.todo}`}>
    <NavLink to={href}>{todo}</NavLink>
  </div>
)
