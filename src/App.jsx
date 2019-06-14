// Import dependencies
import React, { Component } from 'react';

// Three major components
import Dashboard from './components/Dashboard';
import Loader from './components/Loader';
import Home from './components/Home';

import './global.scss';

/**
 * <App />
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    };
  }

  componentWillMount() {
    const location = window.location.href;
    // If we're receiving a token
    if (location.split('=').length > 1) {
      // Store it.
      localStorage.setItem('burrito-token', location.split('=')[1]);
      // Load the page without the token
      return window.location.replace(location.split('#')[0]);
    }

    // If a token is already in localStorage
    if (localStorage.getItem('burrito-token')) {
      // Use the token
      return this.setState({
        token: localStorage.getItem('burrito-token'),
      });
    }

    // Otherwise the user is not logged in.
    return this.setState({
      token: false,
    });
  }

  render() {
    const { token } = this.state;

    // User is logged in.
    if (token) return <Dashboard />;
    // User status is unknown, temporarily
    if (token === null) return <Loader />;
    // User status is not logged in.
    return <Home />;
  }
}

export default App;
