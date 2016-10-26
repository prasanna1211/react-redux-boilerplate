var webpack = require('webpack');
var path = require('path');
/*
 * Defines path here.
 */
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

/*
 * Config file for webpack.
 * Change here in order to change the webpack settings
 */
var config = {
  /*
   * Entry point describes the single page app JS.
   */
  entry: APP_DIR + '/index.jsx',
  /*
   * Output describes the properties of bundle js
   */
  output: {
    path: BUILD_DIR,
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  /*
   * Loaders for ES6 (babel), styles (SASS Loader), (font) file loader and image.
   */
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
  /*
   * Describes the root component. All imports can be done with absolute address  
   */
  resolve : {
    root : path.resolve('src/client/app')
  },
  devtool: "eval-source-map"
};

module.exports = config;
