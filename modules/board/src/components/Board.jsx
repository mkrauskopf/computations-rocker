import { Module } from '@lastui/rocker/platform'
import { useSelector } from 'react-redux'
import * as S from './styled'

const moduleId = 'board'

const Board = () => {
  const colors = useSelector((state) => state.config?.colors?.[moduleId])
  return (
    <S.Board colors={colors}>
      <h1>The Board</h1>
      <hr />
      <div className='board'>
        <p>
          Fibonacci number of 8 is <Module name='fibonacci' ofNumber={8} />
        </p>
        <p>
          Fibonacci number of "nothing" is <Module name='fibonacci' />
          <span className='note'>
            (no <code>props</code> are passed)
          </span>
        </p>
      </div>
    </S.Board>
  )
}

export default Board
