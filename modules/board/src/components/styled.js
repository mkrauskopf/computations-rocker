import { styled } from '@linaria/react'

const Board = styled.div`
  display: flex;
  flex-direction: column;

  border: 2px solid hsl(182deg 25% 50%);
  border-radius: 4px;
  padding: 0.6em;
  background-color: hsl(182deg 25% 85%);

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

  .board {
    padding: 0.3em 0;

    p {
      margin: 0.3em 0;
    }
  }
`

export { Board }
