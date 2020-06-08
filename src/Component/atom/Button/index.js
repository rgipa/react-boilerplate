import React from 'react'
import style from './style.module.scss'

export default ({ className = null, label }) => (
  <button className={`${className} ${style.btn}`}>{label}</button>
)
