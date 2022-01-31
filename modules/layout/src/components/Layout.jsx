import { Module } from '@lastui/rocker/platform'
import * as S from './styled'

const Layout = () => (
  <S.Layout>
    <S.Modules>
      <div>Computations SPA, I'm.</div>
      <Module name='board' />
      <Module name='legend' />
    </S.Modules>
  </S.Layout>
)

export default Layout
