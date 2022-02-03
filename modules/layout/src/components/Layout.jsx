import { Module } from '@lastui/rocker/platform'
import { useSelector } from 'react-redux'

import * as S from './styled'

const moduleId = 'layout'

const Layout = () => {
  const colors = useSelector((state) => state.config?.colors?.[moduleId])

  return (
    <S.Layout colors={colors}>
      <S.Modules>
        <div>Computations SPA, I'm.</div>
        <Module name='board' />
        <Module name='legend' />
      </S.Modules>
    </S.Layout>
  )
}

export default Layout
