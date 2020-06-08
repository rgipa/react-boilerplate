import React from 'react'
import AppFooter from 'Component/organism/AppFooter'

const navLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Sitemap', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' },
]

export default () => <AppFooter navLinks={navLinks} />
