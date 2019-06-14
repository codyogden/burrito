import React, { Component } from 'react';

import Navbar from './Navbar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
      </>
    );
  }
}

export default Dashboard;
