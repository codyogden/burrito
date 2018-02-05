import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TrelloTokenAuth } from 'burrito-trello';

import appConfig from '../../config.json';

import { btn, login } from './LoginButton.scss';

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const auth = new TrelloTokenAuth({
      key: appConfig.trelloAPIKey
    });

    const authURL = auth.getURL({
      name: 'Burrito', // Required
      return_url: window.location, // Required
      expiration: 'never', // Required
      scope: ['read', 'write', 'account'] // Required
    });

    this.setState({
      authURL
    });
  }
  render() {
    return (
      <a
        className={[btn, login, this.props.size].join(' ')}
        href={this.state.authURL}
        aria-label="Login to Burrito using Trello"
      >
        Login with Trello
      </a>
    );
  }
}

LoginButton.propTypes = {
  size: PropTypes.string
};

LoginButton.defaultProps = {
  size: 'regular'
};
