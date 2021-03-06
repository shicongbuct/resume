var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname,//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
      },
      {
            test: /\.html$/,
            exclude: /node_modules/,//这个文件除外
            loader: 'html-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules'//添加对样式表的处理
      }
    ]
  },
  postcss: [
    require('autoprefixer')//调用autoprefixer插件
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ],

  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
}