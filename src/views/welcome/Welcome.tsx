import React, { memo } from 'react'

import { WelcomeHeader } from './components/welcome-header/WelcomeHeader'
export const Welcome = memo(() => {
  return (
    <div>
      <WelcomeHeader></WelcomeHeader>
    </div>
  )
})

Welcome.displayName = 'Welcome'
