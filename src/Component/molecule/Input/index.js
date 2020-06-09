import React, { forwardRef } from 'react'

import style from './style.module.scss'

export default forwardRef(({ className = null, label, ...props }, ref) => (
  <div className={className}>
    <label>{label}</label>
    <input className={style.input} {...props} ref={ref} />
  </div>
))
