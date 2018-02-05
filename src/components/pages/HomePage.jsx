import React, { Component } from 'react';

import { LoginButton } from '../atoms';

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <LoginButton color="grass">Login with Trello</LoginButton>
      </div>
    );
  }
}
