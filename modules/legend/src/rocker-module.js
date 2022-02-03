import { registerModule } from '@lastui/rocker/platform'

import Legend from './components/Legend'
import reducer from './reducer'

registerModule({
  Main: Legend,
  reducer,
})
