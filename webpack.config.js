const path = require('path');

const OUTPUT_PATH = path.resolve('./dist');

const config = {
  entry: './src/main.js',
  output: {
    path: OUTPUT_PATH,
    filename: '[name].js'
  },
};

module.exports = config;
