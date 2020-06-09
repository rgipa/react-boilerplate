import React from 'react'

import AppShell from 'Component/template/AppShell'

import AppHeader from 'Container/AppHeader'
import AppFooter from 'Container/AppFooter'

export default ({ children }) => (
  <AppShell header={<AppHeader />} content={children} footer={<AppFooter />} />
)
