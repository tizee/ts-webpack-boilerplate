const path = require('path');
module.exports = {
  entry: {
    lib: './src/template.ts',
  },
  resolve: {
    extensions: ['ts', 'js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'bundle-[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
