import React from 'react'
import NavLink from 'Component/atom/NavLink'

import style from './style.module.scss'

export default ({ links = [], className = null }) => (
  <nav {...{ className }}>
    <ul className={style.navList}>
      {links.map(({ label, href }) => (
        <li key={label} className={style.navItem}>
          <NavLink href={href}>{label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
)
