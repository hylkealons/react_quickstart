/*
 ./webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
   template: './src/index.html',
   filename: 'index.html',
   inject: 'body'
});

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve('dist'),
      filename: 'index_bundle.js'
   },
   module: {
      loaders: [
         { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
         { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
      ]
   },
   plugins: [HtmlWebpackPluginConfig],
   devServer: {
      public: '0.0.0.0:4000',
      headers: {
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
   }
};