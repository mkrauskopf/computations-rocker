import Fibonacci from './components/Fibonacci'

import { registerModule } from '@lastui/rocker/platform'

registerModule({
  Main: Fibonacci,
  props: process.env.NODE_ENV === 'development' ? { ofNumber: 10 } : {},
})
