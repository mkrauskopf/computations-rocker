const express = require('express')
const path = require('path')
const fs = require('fs')

const router = express.Router()

router.get('/*', (req, res) => {
  const filePath = path.join(__dirname, '../../modules', req.url)
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath)
  } else {
    console.error(`Cannot find module file: ${filePath}`)
    res.status(404).send(`'${req.url}' cannot be found`)
  }
})

module.exports = router
