import React from 'react'
import style from './errorText.module.scss'

const ErrorText = (props) => {
  return (
    <label className={`${props.className} ${style.errorText}`}>
      {props.children}
    </label>
  )
}

export default ErrorText
