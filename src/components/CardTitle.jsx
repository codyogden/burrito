import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { cardTitle } from './CardTitle.scss';

const CardLabels = props => <ul>{props.labels.map(label => <li key={label.id}>{label.name}</li>)}</ul>;

CardLabels.propTypes = {
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      color: PropTypes.string
    })
  ).isRequired
};

export default class CardTitle extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <header className={cardTitle}>
        {/* <div className={styles.actions}>
          
        </div> */}
        <h2>{this.props.card.name}</h2>
        <h3>{this.props.board.name}</h3>
        <div>
          <CardLabels labels={this.props.card.labels} />
        </div>
      </header>
    );
  }
}

CardTitle.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    shortUrl: PropTypes.string,
    url: PropTypes.string,
    labels: CardLabels.propTypes.labels
  }).isRequired,
  board: PropTypes.shape({
    name: PropTypes.string,
    shortUrl: PropTypes.string
  }).isRequired
};
