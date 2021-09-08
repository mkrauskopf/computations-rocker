import { Module } from '@lastui/rocker/platform'

const Board = () => {
  return (
    <div>
      <span>
        Fibonacci number of 8 is <Module name='fibonacci' ofNumber={8} />
      </span>
    </div>
  )
}

export default Board
