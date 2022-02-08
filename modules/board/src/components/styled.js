import { styled } from '@linaria/react'

const Board = styled.div`
  display: flex;
  flex-direction: column;

  border: 2px solid ${(props) => props.colors?.border ?? 'black'};
  border-radius: 4px;
  padding: 0.6em;
  background-color: ${(props) => props.colors?.background ?? 'white'};

  > hr {
    border: 0;
    margin: 6px 0;
    width: 100%;
    background-color: cadetblue;
    height: 2px;
  }

  h1 {
    margin: 0.1em 0;
  }

  .note {
    opacity: 0.6;
  }

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

  .board {
    padding: 0.3em 0;

    p {
      margin: 0.3em 0;
    }
  }
`

export { Board }
