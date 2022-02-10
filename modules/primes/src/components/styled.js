import { styled } from '@linaria/react'

const Primes = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.7em;

  border: 2px solid ${(props) => props.colors?.border ?? 'black'};
  border-radius: 4px;
  padding: 0.6em;
  background-color: ${(props) => props.colors?.background ?? 'white'};

  .tabs {
    display: flex;
    padding: 0.3em 0.2em;
    gap: 1em;

    > a {
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
    }

    .active {
      border-bottom: 2px #1976d2 solid;
      color: #1976d2;
    }
  }
`

const Eratosthenes = styled.div`
  > button {
    margin-top: 0.6em;
  }
`

export { Primes, Eratosthenes }
