import React from 'react'
import style from './style.module.scss'

export default ({ className, children }) => (
  <label className={`${className} ${style.errorText}`}>{children}</label>
)
