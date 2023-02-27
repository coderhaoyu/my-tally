import React from 'react'

import { GlobalStyles } from '@/styles/GlobalStyles'

import { Welcome } from './views/welcome/Welcome'

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Welcome></Welcome>
    </React.Fragment>
  )
}

export default App
