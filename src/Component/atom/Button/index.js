import React from 'react'
import style from './style.module.scss'

export default ({
  className = null,
  type = 'button',
  label,
  isLoading,
  ...props
}) => (
  <button
    className={`${className} ${style.btn}`}
    {...{ type, ...props }}
    disabled={isLoading}
  >
    {isLoading ? 'Loading...' : label}
  </button>
)
