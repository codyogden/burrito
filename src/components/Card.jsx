import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
  padding: 10px;
  box-sizing: border-box;
  &:hover {
    background-color: #efefef;
  }
  &:focus-within {
    background-color: #efefef;
  }
  h3 {
    margin: 0;
    padding: 0;
    margin-bottom: 3px;
    font-weight: normal;
    font-size: 1.25em;
  }
  h3 + div {
    font-weight: lighter;
    font-size: 0.9em;
  }
  a {
    color: currentColor;
    text-decoration: none;
  }
`;

export default class Card extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Item>
        <a href={this.props.shortUrl} rel="noopener noreferrer" target="_blank">
          <h3>{this.props.name}</h3>
          <div className={this.props.idBoard}>{this.props.boardName}</div>
        </a>
      </Item>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  idBoard: PropTypes.string.isRequired,
  boardName: PropTypes.string,
  shortUrl: PropTypes.string.isRequired
};

Card.defaultProps = {
  boardName: ''
};
