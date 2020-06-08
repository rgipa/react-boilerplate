import React from 'react'

import style from './style.module.scss'

export default ({ className = null, isLoading = false }) => (
  <div className={className}>
    <label>Username:</label>
    <input className={style.input} />

    {isLoading && <div>Loading...</div>}
  </div>
)
