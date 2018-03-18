import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TrelloTokenAuth } from 'burrito-trello';

import appConfig from '../../config.json';

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
      <a href={this.state.authURL} className={[this.props.color, ...this.props.className].join(' ')}>
        {this.props.children}
      </a>
    );
  }
}

LoginButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string
};

LoginButton.defaultProps = {
  className: [],
  color: ['water']
};
