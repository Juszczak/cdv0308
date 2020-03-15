const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const OUTPUT_PATH = path.resolve('./dist');

const config = {
  entry: {
    main: './src/main.js',
    style: './src/style.scss',
  },
  output: {
    path: OUTPUT_PATH,
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        'babel-loader',
        'eslint-loader',
        'prettier-loader',
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ],
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    port: 3000
  }
};

module.exports = config;
