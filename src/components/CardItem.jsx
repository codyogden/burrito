import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt';

import styles from './CardItem.scss';

export default class CardItem extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    console.log(this.props.due);
    return (
      <li className={styles.item}>
        <Link className={styles.itemLink} to={`/${this.props.id}`} href={`/${this.props.id}`}>
          <h2 className={styles.cardTitle}>{this.props.name}</h2>
          <div>{this.props.board.name}</div>
        </Link>
        <div className={styles.cardActions}>
          <a href={this.props.url} target="_blank" title="Open in Trello">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </li>
    );
  }
}

CardItem.propTypes = {
  board: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  due: PropTypes.string
};

CardItem.defaultProps = {
  due: null
};
