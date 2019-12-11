// ./webpack.config.babel.js
const path = require('path');

module.exports = {
  entry: "./src/es6/bugo-vimeo.js",
  output: {
    path: path.resolve(__dirname, "assets", "js"),
    filename: "bugo-vimeo.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  watch: true
};