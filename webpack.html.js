/**
 * This file contains the settings for generating the default HTML file in webpack.
 *
 * Documentation: https://github.com/jantimon/html-webpack-plugin
 *
 * @returns {any} Any valid options object. Details: https://github.com/jantimon/html-webpack-plugin#options
 */
const path = require('path');
// const packageJson = require('./package.json');

const sharedInfo = {
  title: 'Burrito',
  longTitle: 'Burrito - A simple way to check Trello.',
  description: 'Burrito is the simple way to see, sort, and access all of your assigned Trello cards in one convenient place.',
  images: {
    basic: {
      url: '',
      alt: '',
    },
  },
};

const twitterCard = {
  'twitter:card': 'summary_large_image',
  'twitter:creator': '@codyogden',
  'twitter:url': 'https://burrito.work',
  'twitter:title': sharedInfo.title,
  'twitter:description': sharedInfo.description,
  'twitter:image:src': sharedInfo.images.basic.url,
  'twitter:image:alt': sharedInfo.images.basic.alt,
  'twitter:dnt': 'on',
};

const openGraph = {
  'og:title': {
    property: 'og:title',
    name: 'og:title',
    content: sharedInfo.title,
  },
  'og:description': {
    property: 'og:description',
    name: 'og:description',
    content: sharedInfo.description,
  },
  'og:image': {
    property: 'og:image',
    name: 'og:image',
    content: sharedInfo.images.basic.url,
  },
  'og:site_name': {
    property: 'og:site_name',
    name: 'og:site_name',
    content: sharedInfo.title,
  },
  'og:type': {
    property: 'og:type',
    bane: 'og:type',
    content: 'website',
  },
};

const schemaOrg = {
  'schema:name': {
    itemprop: 'name',
    content: sharedInfo.title,
  },
  'schema:description': {
    itemprop: 'description',
    content: sharedInfo.description,
  },
  'schema:image': {
    itemprop: 'image',
    content: sharedInfo.images.basic.url,
  },
};

module.exports = {
  title: `${sharedInfo.title} - A simple way to check Trello.`,
  favicon: path.resolve(__dirname, 'src/assets/favicon.png'),
  meta: {
    description: sharedInfo.description,
    'application-name': sharedInfo.title,
    'format-detection': 'telephone=no',
    'theme-color': '#8064A2',
    rating: 'General',
    pinterest: {
      name: 'pinterest',
      content: 'nopin',
      description: 'Sorry, you can\'t save from my website!',
    },
    ...twitterCard,
    ...openGraph,
    ...schemaOrg,
  },
};
