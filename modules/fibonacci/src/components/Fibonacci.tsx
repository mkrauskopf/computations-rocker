import { useSelector } from 'react-redux'

import { naive } from '../fibonacci'
import * as S from './styled'

const moduleId = 'fibonacci'

type Props = Readonly<{ ofNumber: number }>

type ReduxState = any // TODO: fix typing

const Fibonacci = ({ ofNumber }: Props) => {
  const colors = useSelector((state: ReduxState) => state.config?.colors?.[moduleId])
  return (
    <S.Fibonacci colors={colors}>
      {ofNumber == null ? <S.Error>NaN</S.Error> : <S.Number>{naive(ofNumber)}</S.Number>}
    </S.Fibonacci>
  )
}

export default Fibonacci
