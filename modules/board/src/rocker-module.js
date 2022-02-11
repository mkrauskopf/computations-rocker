import { registerModule } from '@lastui/rocker/platform'

import Board from './components/Board'
import middleware from './middleware'

registerModule({
  Main: Board,
  middleware,
})
