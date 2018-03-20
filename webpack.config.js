const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const config = {
  context: __dirname,
  entry: './src/App.jsx',
  devServer: {
    publicPath: '/',
    historyApiFallback: true
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ],
  output: {
    path: path.join(__dirname),
    filename: 'burrito.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {}
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /(\.css)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          ]
        })
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

if (process.env.ENV === 'production') {
  config.resolve.alias.react = 'preact-compat';
  config.resolve.alias['react-dom'] = 'preact-compat';
}

module.exports = config;
