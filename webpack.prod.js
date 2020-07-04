const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  // optimization: {
  //   // https://webpack.js.org/plugins/split-chunks-plugin/
  //   splitChunks: {
  //     // ...
  //   },
  // },
  devtool: false,
});
