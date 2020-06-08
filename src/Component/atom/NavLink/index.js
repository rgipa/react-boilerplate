import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.module.scss'

export default ({ className = null, href, children }) => (
  <Link to={href} className={`${className} ${style.link}`}>
    {children}
  </Link>
)
