import React, { memo } from 'react'

import { WelcomeHeaderWrapper } from './style'

export const WelcomeHeader = memo(() => {
  return (
    <WelcomeHeaderWrapper>
      <header></header>
    </WelcomeHeaderWrapper>
  )
})

WelcomeHeader.displayName = 'WelcomeHeader'
