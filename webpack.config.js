const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        'eslint-loader'
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
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  devServer: {
    port: 3000
  }
};

module.exports = config;
