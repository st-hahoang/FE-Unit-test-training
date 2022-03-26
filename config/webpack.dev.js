const { merge } = require('webpack-merge')
const paths = require('./paths')

const common = require('./webpack.common')

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'eval',

  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
    open: true
  },

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
})
