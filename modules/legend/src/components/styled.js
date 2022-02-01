import { styled } from '@linaria/react'

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7em;

  border: 2px solid ${(props) => props.colors?.border ?? 'black'};
  border-radius: 4px;
  padding: 0.6em;
  background-color: ${(props) => props.colors?.background ?? 'white'};
`

const Modules = styled.div`
  display: grid;
  grid-gap: 0.7rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

  > .colorBox {
    padding: 0.3em;
    border-radius: 4px;
  }
`

export { Legend, Modules }
