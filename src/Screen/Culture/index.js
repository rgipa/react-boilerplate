import React from 'react'

// Components
import AppShell from 'Component/template/AppShell'

// Containers
import AppHeader from 'Container/AppHeader'
import AppFooter from 'Container/AppFooter'

export default () => (
  <AppShell
    header={<AppHeader />}
    content={<div>Culture Screen</div>}
    footer={<AppFooter />}
  />
)
