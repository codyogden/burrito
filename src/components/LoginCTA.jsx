import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './LoginCTA.scss';

import LoginButton from '../components/LoginButton';

export default class LoginCTA extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <section className="cta-login">
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
