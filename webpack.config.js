var webpack = require('webpack');
var version = require("./package.json").version;
var path = require('path');
var banner =
  "/**\n" +
  " * vue-markdown v2" +
  " * https://github.com/Akirami/vue-markdown-v2\n" +
  " * MIT License\n" +
  " */\n";

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
        loader: ['vue-style-loader', 'css-loader']
      }, {
        test: /\.json$/,
        loader: "json-loader"
      }]
  },
}
