var webpack = require('webpack');
var version = require("./package.json").version;
var path = require('path');
var banner =
  "vue-markdown v2\n" +
  "https://github.com/Akirami/vue-markdown-v2\n" +
  "MIT License";


module.exports = {
  mode: 'development',
  entry: './src/build.js',
  output: {
    path: path.join(__dirname,"./dist"),
    filename: 'vue-markdown.js',
    library: 'VueMarkdown',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ],
  module: {
    rules: [{
      test: /\.vue$/,
      loader: "vue-loader"
    }, {
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/
    }, {
        test: /\.css$/,
        loader: 'css-loader'
      }, {
        test: /\.css$/,
        loader: 'vue-style-loader'
      }]
  },
}
