import { styled } from '@linaria/react'

const Fibonacci = styled.span`
  margin: 0.3em 0;
  border: 2px solid ${(props) => props.colors?.border ?? 'black'};
  border-radius: 4px;
  padding: 0.15em 0.3em;
  background-color: ${(props) => props.colors?.background ?? 'white'};
`

const Number = styled.span``

const Error = styled.span`
  color: #bb1b1b;
`

export { Fibonacci, Number, Error }
