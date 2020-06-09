import React from 'react'
import TodoItem from 'Component/atom/TodoItem'

import style from './style.module.scss'

export default ({ todos = [], className = null, getHref }) => (
  <div {...{ className }}>
    <ul className={style.list}>
      {todos.map(({ id, title }) => (
        <li key={id} className={style.item}>
          <TodoItem todo={title} href={getHref(id)} />
        </li>
      ))}
    </ul>
  </div>
)
