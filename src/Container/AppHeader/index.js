import React from 'react'
import AppLogo from 'Component/atom/AppLogo'
import AppHeader from 'Component/organism/AppHeader'

const navLinks = [
  { label: 'Culture', href: '/culture' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
]

export default () => (
  <AppHeader logo={<AppLogo src={'/assets/logo.png'} />} navLinks={navLinks} />
)
