const express = require('express')

const spaRouter = require('./spa')
const modules = require('./modules')

const app = express()

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})
app.use(spaRouter)
app.use('/modules', modules)

app.listen(3000, () => {
  console.log('Listening on port http://localhost:3000')
})
