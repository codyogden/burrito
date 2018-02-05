import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff';

import { logoutButton } from './LogoutButton.scss';

const userLogOut = () => {
  localStorage.removeItem('burrito-token');
  window.location.href = '/';
};

export default class LogoutButton extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <button onClick={userLogOut} className={logoutButton}>
        <FontAwesomeIcon icon={faPowerOff} />
      </button>
    );
  }
}
