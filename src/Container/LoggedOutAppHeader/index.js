import React from 'react'
import AppLogo from 'Component/atom/AppLogo'
import AppHeader from 'Component/organism/AppHeader'

const navLinks = [{ label: 'Login', href: '/login' }]

export default () => (
  <AppHeader logo={<AppLogo src={'/assets/logo.png'} />} navLinks={navLinks} />
)
