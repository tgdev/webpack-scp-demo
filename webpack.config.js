const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const config = require('config');

/*-------------------------------------------------*/

module.exports = {
  // webpack optimization mode
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',

  // entry file(s)
  entry: './src/index.js',

  // output file(s) and chunks
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    chunkFilename: '[name].js',
    publicPath: config.get('publicPath')
  },

  // bundle optimisation
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        // vendor chunk
        vendor: {
          // chunk name
          name: 'vendor',
          // sync + async chunks
          chunks: 'all',
          // import file path containing node_modules
          test: /node_modules/,
          // priority
          priority: 20
        },

        // common chunk
        common: {
          name: 'common',
          // shared (imported) 2 or more times
          minChunks: 2,
          // async only
          chunks: 'async',
          priority: 10,
          // use existing chunk if available
          reuseExistingChunk: true,
          // form this chunk irrespective of the size of the chunk (default is 30kb)
          enforce: true
        }
      }
    }
  },

  // module/loaders configuration
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new webpack.NamedChunksPlugin(
      chunk =>
        chunk.name ||
        chunk.mapModules(m => path.basename(m.request, '.js')).join('_')
    ),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ],

  // development server configuration
  devServer: {
    // must be `true` for SPAs
    historyApiFallback: true,

    // open browser on server start
    open: config.get('open')
  },

  // generate source map
  devtool:
    process.env.NODE_ENV === 'production'
      ? 'source-map'
      : 'cheap-module-eval-source-map'
};
