import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { cardTitle } from './CardTitle.scss';

export default class CardTitle extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return(
      <header className={cardTitle}>
        <h2><a target="_blank" href={this.props.card.shortUrl}>{this.props.card.name}</a></h2>
        <h3><a target="_blank" href={this.props.board.shortUrl}>{this.props.board.name}</a></h3>
      </header>
    );
  }
}

CardTitle.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    shortUrl: PropTypes.string
  }).isRequired,
  board: PropTypes.shape({
    name: PropTypes.string,
    shortUrl: PropTypes.string
  }).isRequired
};
