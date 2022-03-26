const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
  // Where webpack looks to start building the bundle
  target: 'web',
  context: paths.src,
  entry: {
    main: ['./app/App.tsx'],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'redux'
    ],
    styles: ['./stylesheet/styles.scss']
  },
  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),
    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'assets',
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          }
        },
        'robots.txt',
        'manifest.json'
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html'
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      // add the version of browsers list you want
                     browsers: ['> 1%, not dead'],
                    },
                    useBuiltIns: 'usage',
                    corejs: 3
                  }
                ]
              ]
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.png$/, use: 'url-loader?limit=10000' },
      { test: /\.jpg$/, use: 'file-loader' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: ['@svgr/webpack'] },
      {
        test: /\.woff(2?)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              mimetype: 'application/font-woff',
            }
          }
        ]
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              mimetype: 'application/octet-stream',
            }
          }
        ]
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' }
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias : {
      '@app': paths.app,
      '@assets': paths.assets,
      '@config': paths.config,
      '@shared': paths.shared,
      '@core': paths.core,
    },
  },
}
