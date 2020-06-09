import React from 'react'

export default ({ id, title, details }) => (
  <div>
    <div>ID: {id}</div>
    <div>{title}</div>
    <div>{details}</div>
  </div>
)
