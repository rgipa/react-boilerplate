import React from 'react'
import style from './style.module.scss'

export default ({ header, content, footer }) => (
  <div className={style.container}>
    <header className={style.header}>{header}</header>
    <main className={style.main}>{content}</main>
    <footer className={style.footer}>{footer}</footer>
  </div>
)
