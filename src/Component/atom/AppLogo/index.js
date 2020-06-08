import React from 'react'
import style from './style.module.scss'

export default ({ className = null, src }) => (
  <img className={`${className} ${style.logo}`} {...{ src }} />
)
