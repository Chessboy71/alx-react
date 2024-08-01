const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/trying.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-laoder', 'css-loader'],
      },
      {
        test: /.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    open: true,
    hot: true,
    port: 8564,
  },
};
