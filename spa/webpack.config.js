const path = require('path')

const settings = require('./node_modules/@lastui/rocker/webpack/settings')

const rockerWebpackConfig = require(path.resolve(settings.WEBPACK_ROOT_PATH, 'config/spa.js'))

rockerWebpackConfig.entry = {
  computations: ['./src/Computations.js'],
}

module.exports = rockerWebpackConfig
