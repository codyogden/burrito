import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff';
import styled from 'styled-components';

import { logout } from '../Burrito';

const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px 8px;
  margin: 0;
  &:hover {
    background-color: #efefef;
  }
`;

export default class LogoutButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Button aria-label="Logout of Burrito" onClick={logout}>
        <FontAwesomeIcon icon={faPowerOff} />
      </Button>
    );
  }
}
