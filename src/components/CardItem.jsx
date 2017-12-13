import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './CardItem.scss';

export default class CardItem extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <li
        role="menuitem"
        onClick={() => this.props.onItemClick(this.props.id)}
        onKeyDown={() => this.props.onItemClick(this.props.id)}
        className={['cardItem', this.props.active ? 'cardItem-active' : ''].join(' ')}
      >
        <h3>{this.props.name}</h3>
        <div>{this.props.board}</div>
      </li>
    );
  }
}

CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  board: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};
