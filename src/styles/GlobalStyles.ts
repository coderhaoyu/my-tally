import { createGlobalStyle } from 'styled-components'

import { Variables } from './Variables'
export const GlobalStyles = createGlobalStyle`
  ${Variables};
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .df{
    display: flex;
  }

`
