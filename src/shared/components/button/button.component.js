import React from 'react'
import style from './button.module.scss'

const Button = (props) => {
  return (
    <button className={style.btn} disabled={props.isLoading} {...props}>
      {props.isLoading ? 'Loading...' : props.label}
    </button>
  )
}

export default Button
