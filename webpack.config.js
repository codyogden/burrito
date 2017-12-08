const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/App.jsx',
  devtool: 'cheap-eval-source-map',
  devServer: {
    publicPath: '/',
    historyApiFallback: true
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    })
  ],
  output: {
    path: path.join(__dirname),
    filename: 'burrito.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: { url: false }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [ 'node_modules/' ] }
            }
          ])
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};
