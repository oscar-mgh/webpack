const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPack          = require('html-webpack-plugin')
const CopyPlugin           = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  output: {
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false
        },
      },
      {
        test: /\.css$/,
        exclude: /style.css/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /style.css/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebPack({
      title: 'Webpack App',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false,      
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/', to: 'assets/' },
      ]
    }),
  ],
}