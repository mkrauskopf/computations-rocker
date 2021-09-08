const path = require('path')

const settings = require('./node_modules/@lastui/rocker/webpack/settings')

const rockerWebpackConfig = require(path.resolve(settings.WEBPACK_ROOT_PATH, 'config/module.js'))

rockerWebpackConfig.entry = {
  main: ['./src/fibonacci.js'],
}

module.exports = rockerWebpackConfig
