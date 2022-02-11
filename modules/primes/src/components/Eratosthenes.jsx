import { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { infiniteGenerator } from '../eratosthenes'
import * as S from './styled'

const Eratosthenes = () => {
  const dispatch = useDispatch()
  const gen = useMemo(() => infiniteGenerator(100), [])
  const [prime, setPrime] = useState(() => gen.next().value)

  const computeNextPrime = () => {
    setPrime(gen.next().value)
    dispatch({ type: 'COMPUTATION_PERFORMED', payload: { computationType: 'eratosthenes' } })
  }

  return (
    <S.Eratosthenes>
      <div>Current Prime: {prime}</div>
      <button onClick={computeNextPrime}>Compute next</button>
    </S.Eratosthenes>
  )
}

export default Eratosthenes
