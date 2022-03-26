const path = require('path')

module.exports = {
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../dist'),
  app: path.resolve(__dirname, '../src/app/'),
  assets: path.resolve(__dirname, '../src/assets/'),
  config: path.resolve(__dirname, '../src/config/'),
  shared: path.resolve(__dirname, '../src/app/shared/'),
  core: path.resolve(__dirname, '../src/app/core'),
}
