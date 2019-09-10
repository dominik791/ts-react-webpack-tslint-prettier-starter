const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfigBase = require('./webpack-config.base');

module.exports = merge(webpackConfigBase, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
