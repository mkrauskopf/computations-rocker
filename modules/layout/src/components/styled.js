import { styled } from '@linaria/react'

const Layout = styled.div`
  margin: 0.6em 0 0 0;
  border: 2px solid hsl(39deg 100% 50%);
  border-radius: 4px;
  padding: 0.8em;
  background-color: hsl(39deg 100% 87%);
`

const Modules = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export { Layout, Modules }
