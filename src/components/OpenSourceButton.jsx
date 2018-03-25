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

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Button target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/codyogden/burrito" className={[this.props.color, ...this.props.className].join(' ')}>
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
