const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/app/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/',
    port: 9000
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app'
    })

  ],
  resolve: {
    alias: {
      $sdk: path.resolve(__dirname, 'src/sdk'),
      $app: path.resolve(__dirname, 'src/app')
    }
  }
}
