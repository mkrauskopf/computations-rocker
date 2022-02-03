import { registerModule } from '@lastui/rocker/platform'

import Fibonacci from './components/Fibonacci'

registerModule({
  Main: Fibonacci,
  props: process.env.NODE_ENV === 'development' ? { ofNumber: 10 } : {},
})
