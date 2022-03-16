const express = require('express')
const path = require('path')
const fs = require('fs')

const router = express.Router()

const spaFile = (spaFileName) => file(path.join(__dirname, `../../spa/build/spa/${spaFileName}`))

const file = (filePath) => (req, res) => {
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath)
  } else {
    console.error(`'${filePath}' does not exist`)
    res.status('404').send(`'${req.url}' cannot be found`)
  }
}

router.get('/', spaFile('index.html'))
router.get('/spa/dependencies.dll.min.js', spaFile('dependencies.dll.min.js'))
router.get('/spa/platform.dll.min.js', spaFile('platform.dll.min.js'))
router.get('/spa/bootstrap.dll.min.js', spaFile('bootstrap.dll.min.js'))
router.get('/spa/main.min.js', spaFile('main.min.js'))
router.get('/styles.css', spaFile('styles.css'))

module.exports = router
