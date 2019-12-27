const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'fis.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: `fis`,
    globalObject: 'this',
    libraryTarget: "umd",
    libraryExport: 'default',
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};
