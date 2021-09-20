const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  devtool: 'source-map',
  devServer: { port: 3030, historyApiFallback: true },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.tsx?$/, exclude: /node_modules/, use: ['ts-loader'] },
      { test: /\.s?css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  plugins: [
    new HTMLPlugin({ template: path.join(__dirname, 'public', 'index.html') }),
    new CleanWebpackPlugin(),
  ],
};
