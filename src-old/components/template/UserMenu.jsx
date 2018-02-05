import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff';

import Notifications from './Notifications';

import styles from './UserMenu.scss';

const userLogout = () => {
  localStorage.removeItem('burrito-token');
  window.location.href = '/';
};

export default class UserMenu extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className={styles.userMenu}>
        <Notifications />
        <button
          className={[styles.btn, styles.logout].join(' ')}
          title="Logout of Trello"
          onClick={userLogout}
          aria-label="Logout of Burrito"
        >
          <FontAwesomeIcon icon={faPowerOff} />
        </button>
      </div>
    );
  }
}
