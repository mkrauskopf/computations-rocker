import { Main } from '@lastui/rocker/runtime'
import React from 'react'
import ReactDOM from 'react-dom'

import context from './context'

const getContext = async () => context

const computations = (
  <div>
    <div>Computations SPA, I'm.</div>
    <Main fetchContext={getContext} />
  </div>
)

ReactDOM.render(computations, document.getElementById('computations'))
