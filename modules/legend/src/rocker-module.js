import Legend from './components/Legend'
import reducer from './reducer'

import { registerModule } from '@lastui/rocker/platform'

registerModule({
  Main: Legend,
  reducer,
})
