const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.config.js');
const webpack = require('webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");


module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(
      {
        cache: true,
        parallel: true,
        uglifyOptions: {
          ecma: 5,
          mangle: true
        },
        sourceMap: true
      }),
      // use webpack ignore plugin to prevent generation of modules based on import/require calls
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // code minifier based on babel
      new MinifyPlugin(),
  ],
  mode: "production"
});
