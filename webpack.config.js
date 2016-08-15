var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var jsHintConfig = require('./jshint.config.js');

module.exports = {
  context: __dirname,
  entry: "./src/bundle.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "giraph.min.js",
    library: "Giraph",
    libraryTarget: "umd" 
  },

  module: {
    loaders: [
      { test: /\.(jade|pug)$/, loader: 'pug-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015']}},
      { test: /\.json$/, exclude: /node_modules/, loader: 'json-loader'}
    ],
    preLoaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "jshint-loader" }
    ] 
  },

  jshint: jsHintConfig,

  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.pug' }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }})
  ],

  // Dev only
  devServer: {
    contentBase: "dist",
    port: 3000
  },
  devtool: 'source-map'
};
