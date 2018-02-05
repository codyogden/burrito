import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../containers/Notifications';
import { LogoutButton } from '../components/atoms';

import styles, { mainHeader } from './Header.scss';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <header className={mainHeader}>
        <h1>
          <Link title="Logout of Burrito" href="/" to="/">
            Burrito
          </Link>
        </h1>
        <div className={styles.headerActions}>
          <Notifications />
          <LogoutButton />
        </div>
      </header>
    );
  }
}
