import { styled } from '@linaria/react'

const Layout = styled.div`
  margin: 0.6em 0 0 0;
  border: 2px solid ${(props) => props.colors?.border ?? 'black'};
  border-radius: 4px;
  padding: 0.8em;
  background-color: ${(props) => props.colors?.background ?? 'white'};
`

const Modules = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export { Layout, Modules }
