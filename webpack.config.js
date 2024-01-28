const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  mode: 'development',
  plugins: [new HTMLWebpackPlugin({
    template: path.resolve(__dirname, 'public', 'index.html'),
  }), new webpack.ProgressPlugin()],
};