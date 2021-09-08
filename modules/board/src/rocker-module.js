import Board from './components/Board'

import { registerModule } from '@lastui/rocker/platform'

require('./styles/board.css')

registerModule({
  Main: Board,
})
