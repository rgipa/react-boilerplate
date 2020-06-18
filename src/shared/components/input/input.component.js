import React, { forwardRef } from 'react'

import style from './input.module.scss'

// export default forwardRef(({ className = null, label, ...props }, ref) => (
//   <div className={className}>
//     <label>{label}</label>
//     <input className={style.input} {...props} ref={ref} />
//   </div>
// ))

const Input = (props, ref) => {
  return (
    <div className={props.className}>
      <label>{props.label}</label>
      <input className={style.input} {...props} ref={ref} />
    </div>
  )
}

export default forwardRef(Input)
