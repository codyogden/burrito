import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles, { btn } from './Button.scss';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <a
        href={this.props.href}
        target={this.props.target}
        className={[btn, styles[this.props.color], styles[this.props.size], ...this.props.className].join(' ')}
      >
        {this.props.children}
      </a>
    );
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.string,
  target: PropTypes.string
};

Button.defaultProps = {
  className: [],
  color: ['water'],
  href: null,
  size: 'regular',
  target: null
};
