import React from 'react'
import { Link } from 'react-router-dom'
import style from './header.module.scss'

const Header = (props) => {
  return (
    <header
      className={`${style.appHeader} bg-info px-2 py-3 border-bottom border-dark`}
    >
      <h4 className="mb-0">Header</h4>
      <span className="mx-3">|</span>
      <nav>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <Link to="/culture" className={style.link}>
              Culture
            </Link>
            <Link to="/contact" className={style.link}>
              Contact
            </Link>
            <Link to="/examples" className={style.link}>
              Examples
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

// <img className={style.logo} src="/assets/logo.png" />
