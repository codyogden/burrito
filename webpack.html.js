/**
 * This file contains the settings for generating the default HTML file in webpack.
 *
 * Documentation: https://github.com/jantimon/html-webpack-plugin
 *
 * @returns {any} Any valid options object. Details: https://github.com/jantimon/html-webpack-plugin#options
 */
const packageJson = require('./package.json');

module.exports = {
  title: 'Hello, World!',
  meta: {
    description: packageJson.description,
  },
};
