import { Link, Route, useLocation } from '@lastui/rocker/platform'
import { useSelector } from 'react-redux'

import Fibonacci from './Fibonacci'
import Primes from './Primes'
import * as S from './styled'

const moduleId = 'board'

const Board = () => {
  const colors = useSelector((state) => state.config?.colors?.[moduleId])
  const location = useLocation()
  return (
    <S.Board colors={colors}>
      <h1>The Board</h1>
      <hr />
      <div className='tabs'>
        <Link
          to='/fibonacci'
          className={location.pathname === '/fibonacci' || location.pathname === '/' ? 'active' : undefined}
        >
          Fibonacci
        </Link>
        <Link to='/primes' className={location.pathname === '/primes' ? 'active' : undefined}>
          Primes
        </Link>
      </div>

      <div className='board'>
        <Route exact path='/' component={Fibonacci} />
        <Route path='/fibonacci' component={Fibonacci} />
        <Route path='/primes' component={Primes} />
      </div>
    </S.Board>
  )
}

export default Board
