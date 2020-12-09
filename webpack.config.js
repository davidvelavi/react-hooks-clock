const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
  entry: './src/index.js',
  output: {
    path : path.resolve(__dirname, 'dist'),
    publicPath : '/',
    filename : 'bundle.js'
  },
  resolve:{
    extensions : ['.js', '.jsx']
  },
  module:{
    rules :[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },{
        test: /\.(s*css)$/,
        use:[ MiniCssExtractPlugin.loader,'css-loader', 'sass-loader'],
      },{
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    })
  ]
}