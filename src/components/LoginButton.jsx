import React, { Component } from 'react';
import { TrelloTokenAuth } from 'burrito-trello';

import appConfig from '../../config.json';

import './LoginButton.scss';

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
      <a className="button button-login" href={this.state.authURL}>
        Login with Trello
      </a>
    );
  }
}
