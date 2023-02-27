import styled from 'styled-components'

export const WelcomeWrapper = styled.div`
  height: calc(100vh - var(--welcome-nav-height));
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to bottom,
    var(--welcome-bg-start) 0%,
    var(--welcome-bg-end) 100%
  );
  margin-bottom: var(--welcome-nav-height);
`
