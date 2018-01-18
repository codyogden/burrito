import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginButton from '../LoginButton';

import './Header.scss';

const MenuType = props => {
  if (props.user) return <div>Actions</div>;
  return <LoginButton />;
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
      <header>
        <h1>
          <Link to="/" href="/">
            Burrito
          </Link>
        </h1>
        <MenuType user={this.state.userIsLoggedIn} />
      </header>
    );
  }
}
