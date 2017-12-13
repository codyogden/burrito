import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className={`card card-${this.props.id}`}>{this.props.name}</div>;
  }
}

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
};

Card.defaultProps = {
  id: null,
  name: null
};
