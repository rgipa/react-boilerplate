import React from 'react'
import style from './style.module.scss'

let y = 'asd'
let x = y

export default ({ className = null, src }) => (
  <img className={`${className} ${style.logo}`} {...{ src }} />
)
