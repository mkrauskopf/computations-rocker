import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styled'

const modulesColors = {
  layout: { background: 'hsl(39deg 100% 87%)', border: 'hsl(39deg 100% 50%)' },
  board: { background: 'hsl(182deg 25% 85%)', border: 'hsl(182deg 25% 50%)' },
  fibonacci: { background: 'hsl(219deg 79% 81%)', border: 'hsl(219deg 79% 66%)' },
  primes: { background: 'hsl(161deg 79% 81%)', border: 'hsl(161deg 79% 66%)' },
  legend: { background: 'hsl(172deg 78% 93%)', border: 'hsl(172deg 78% 72%)' },
}

const Legend = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'MODULE_COLORS', payload: modulesColors })
  }, [dispatch])

  return (
    <S.Legend colors={modulesColors['legend']}>
      <div>Modules color coding</div>
      <S.Modules>
        {Object.entries(modulesColors).map(([moduleId, colors]) => (
          <div
            key={moduleId}
            className='colorBox'
            style={{ backgroundColor: colors.background, border: `2px solid ${colors.border}` }}
          >
            {moduleId}
          </div>
        ))}
      </S.Modules>
    </S.Legend>
  )
}

export default Legend
