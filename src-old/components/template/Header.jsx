import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import UserMenu from './UserMenu';

import styles from './Header.scss';

const MenuType = props => {
  if (props.user) return <UserMenu />;
  return <div>&nbsp;</div>;
};

MenuType.propTypes = {
  user: PropTypes.bool.isRequired
};

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      userIsLoggedIn: false
    };
  }
  componentWillMount() {
    if (localStorage.getItem('burrito-token')) {
      return this.setState({
        userIsLoggedIn: true
      });
    }
    return true;
  }
  render() {
    return (
      <header className={[this.state.userIsLoggedIn ? styles.templateHeader : styles.hiddenHeader]}>
        <h1 className={styles.siteTitle}>
          <Link to="/" href="/">
            Burrito
          </Link>
        </h1>
        <MenuType user={this.state.userIsLoggedIn} />
      </header>
    );
  }
}
