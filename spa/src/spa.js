import { Main } from '@lastui/rocker/bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'

import context from './context'

const getContext = async () => context

const spa = <Main fetchContext={getContext} />

ReactDOM.render(spa, document.getElementById('computation-spa-mount'))
