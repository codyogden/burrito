import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.a`
  background-color: #ccc;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  display: inline-block;
`;

export default class ButtonLink extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Button {...this.props}>{this.props.children}</Button>;
  }
}

ButtonLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
