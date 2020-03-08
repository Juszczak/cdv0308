const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const OUTPUT_PATH = path.resolve('./dist');

const config = {
  entry: {
    main: './src/main.js',
    style: './src/style.css',
  },
  output: {
    path: OUTPUT_PATH,
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
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
