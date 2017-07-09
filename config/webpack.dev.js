const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = path.resolve(__dirname, '..', 'src');
const distDir = path.resolve(__dirname, '..', 'dist');

console.log('Building development config...');

module.exports = {
  context: srcDir,

  devtool: 'source-map',

  entry: [
    // 'webpack-dev-server/client?http://localhost:3000',
    './index.ts'
  ],

  output: {
    filename: 'main.bundle.js',
    path: distDir,
    publicPath: '/',
    sourceMapFilename: 'main.map',
  },

  devServer: {
    contentBase: srcDir,
    // match the output path
    publicPath: '/',
    // match the output `publicPath`
    historyApiFallback: true,
    port: 8080
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      },
      {
        test: /\.(jpg|jpeg|png|gif|ico|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000, // use data url for assets <= 10KB
          name: 'assets/[name].[hash].[ext]'
        },
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),

    new HtmlWebpackPlugin({
      template: path.join(srcDir, 'index.html'),
      // where to find the html template

      path: distDir,
      // where to put the generated file

      filename: 'index.html'
      // the output file name
    }),
  ],
};
