import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './LoginCTA.scss';

import LoginButton from '../components/LoginButton';

export default class LoginCTA extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <section className={styles.ctaLogin}>
        <h2>{this.props.text}</h2>
        <LoginButton />
      </section>
    );
  }
}

LoginCTA.propTypes = {
  text: PropTypes.string
};

LoginCTA.defaultProps = {
  text: 'Ready to get started?'
};
