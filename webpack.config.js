var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        include : APP_DIR,
        loaders: ['style', 'css', 'sass']
      },
      {
        test : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include : APP_DIR,
        loader : 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  resolve : {
    root : path.resolve('src/client/app')
  },
  devtool: "eval-source-map"
};

module.exports = config;
