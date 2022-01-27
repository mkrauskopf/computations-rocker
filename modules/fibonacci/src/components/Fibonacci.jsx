import { naive } from '../fibonacci'

import * as S from './styled'

const Fibonacci = ({ ofNumber }) => (
  <S.Fibonacci>{ofNumber == null ? <S.Error>NaN</S.Error> : <S.Number>{naive(ofNumber)}</S.Number>}</S.Fibonacci>
)

export default Fibonacci
