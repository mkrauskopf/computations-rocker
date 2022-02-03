import { useSelector } from 'react-redux'

import { naive } from '../fibonacci'
import * as S from './styled'

const moduleId = 'fibonacci'

const Fibonacci = ({ ofNumber }) => {
  const colors = useSelector((state) => state.config?.colors?.[moduleId])
  return (
    <S.Fibonacci colors={colors}>
      {ofNumber == null ? <S.Error>NaN</S.Error> : <S.Number>{naive(ofNumber)}</S.Number>}
    </S.Fibonacci>
  )
}

export default Fibonacci
