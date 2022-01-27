import { Main } from '@lastui/rocker/runtime'
import React from 'react'
import ReactDOM from 'react-dom'

// TODO: Linaria does not work here. Fix it and use it instead of inlined styles below.
//import * as S from './styled'
import context from './context'

const getContext = async () => context

const Computations = (
  <div
    style={{
      margin: '0.6em 0 0 0',
      border: '2px solid #ffa500',
      borderRadius: '4px',
      padding: '0.8em',
      backgroundColor: '#ffa50026',
    }}
  >
    <div>Computations SPA, I'm.</div>
    <Main fetchContext={getContext} />
  </div>
)

ReactDOM.render(Computations, document.getElementById('computations'))
