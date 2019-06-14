import React, { Component } from 'react';

import Burrito, { logout } from '../../Burrito';

import {
  Title,
  Avatar,
  UserMenuButton,
  UserMenuContainer,
  UserMenuContent,
  Bar,
  LogoutButton,
} from './Navbar.atoms';

const UserMenu = () => (
  <UserMenuContent>
    <LogoutButton onClick={logout} type="button">Logout</LogoutButton>
  </UserMenuContent>
);

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserMenu: false,
      user: false,
    };
    this.userMenuClickHandler = this.userMenuClickHandler.bind(this);
  }

  componentWillMount() {
    Burrito.members('me')
      .info()
      .then((user) => {
        this.setState({ user });
      });
  }

  userMenuClickHandler() {
    const { showUserMenu } = this.state;
    this.setState({
      showUserMenu: !showUserMenu,
    });
  }

  render() {
    const {
      showUserMenu,
      user,
    } = this.state;
    if (!user.avatarUrl) return <></>;
    return (
      <Bar>
        <Title>burrito</Title>
        <UserMenuContainer>
          <UserMenuButton type="button" onClick={this.userMenuClickHandler}>
            <Avatar src={`${user.avatarUrl}/30.png`} alt={user.username} />
          </UserMenuButton>
          {showUserMenu ? <UserMenu /> : <></>}
        </UserMenuContainer>
      </Bar>
    );
  }
}

export default Navbar;
