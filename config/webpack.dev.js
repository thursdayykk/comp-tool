const baseConfig = require('./webpack.base')
const { smart } = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = smart(baseConfig, {
  mode: 'development', // 开发模式
  entry: path.resolve(__dirname, '../example/src/app.js'),
  output: {
    path: path.resolve(__dirname, '../example/src/'),
    filename: 'bundle.js', // 使用webpack-dev-sevrer启动开发服务时，并不会实际在`src`目录下生成bundle.js，打包好的文件是在内存中的，但并不影响我们使用。
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader?modules'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../example/src/index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, './example/src/'),
    compress: true,
    port: 3001, // 启动端口为 3001 的服务
    open: true, // 自动打开浏览器
  },
})
