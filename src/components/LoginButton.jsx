import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TrelloTokenAuth } from 'burrito-trello';
import styled from 'styled-components';

import appConfig from '../../config.json';

const Button = styled.a`
  background-color: #54a654;
  padding: 10px 20px;
  color: #fff;
  text-decoration: none;
  display: inline-block;
`;

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
      <Button href={this.state.authURL} className={[this.props.color, ...this.props.className].join(' ')}>
        {this.props.children}
      </Button>
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
