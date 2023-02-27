import React, { memo } from 'react'

import { WelcomeHeader } from './components/welcome-header/WelcomeHeader'
import { WelcomeWrapper } from './WelcomeStyle'
export const Welcome = memo(() => {
  return (
    <WelcomeWrapper>
      <WelcomeHeader></WelcomeHeader>
    </WelcomeWrapper>
  )
})

Welcome.displayName = 'Welcome'
