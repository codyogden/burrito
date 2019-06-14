require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const webpackHTML = require('./webpack.html');
const packageJson = require('./package.json');

module.exports = (env, argv) => {
  const config = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      publicPath: '/',
      filename: '[name].js',
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]',
          },
        },
      },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {},
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HTMLWebpackPlugin(webpackHTML),
      new webpack.DefinePlugin({
        __NAME__: JSON.stringify(packageJson.name),
        __TRELLO_API_KEY__: JSON.stringify(process.env.TRELLO_API_KEY),
      }),
      new CopyPlugin([
        { from: './.netlify/_redirects', to: './' },
      ]),
    ],
    devServer: {
      contentBase: './public',
      hot: true,
      historyApiFallback: true,
    },
  };

  // Use Preact in production
  if (argv.mode === 'production') {
    config.resolve.alias.react = 'preact-compat';
    config.resolve.alias['react-dom'] = 'preact-compat';
  }

  return config;
};
