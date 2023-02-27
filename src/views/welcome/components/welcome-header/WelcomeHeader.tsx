import React, { memo } from 'react'

import { WelcomeHeaderWrapper } from './WelcomeHeaderStyle'

export const WelcomeHeader = memo(() => {
  return (
    <WelcomeHeaderWrapper>
      <header></header>
    </WelcomeHeaderWrapper>
  )
})

WelcomeHeader.displayName = 'WelcomeHeader'
