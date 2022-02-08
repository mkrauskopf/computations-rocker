import { Link, Route, useLocation } from '@lastui/rocker/platform'
import { useSelector } from 'react-redux'

import Atkin from './Atkin'
import Eratosthenes from './Eratosthenes'
import * as S from './styled'

const moduleId = 'primes'

const Primes = () => {
  const colors = useSelector((state) => state.config?.colors?.[moduleId])
  const location = useLocation()
  const locationBase = location.pathname.startsWith(`/${moduleId}`) ? `/${moduleId}` : ''
  return (
    <S.Primes colors={colors}>
      <div className='tabs'>
        <Link
          to={`${locationBase}/eratosthenes`}
          className={
            location.pathname === `${locationBase}/eratosthenes` ||
            location.pathname === `${locationBase}/` ||
            location.pathname === `${locationBase}`
              ? 'active'
              : undefined
          }
        >
          Eratosthenes
        </Link>
        <Link
          to={`${locationBase}/atkin`}
          className={location.pathname === `${locationBase}/atkin` ? 'active' : undefined}
        >
          Atkin
        </Link>
      </div>

      <Route exact path='/' component={Eratosthenes} />
      <Route path='/eratosthenes' component={Eratosthenes} />
      <Route path='/atkin' component={Atkin} />
    </S.Primes>
  )
}

export default Primes
