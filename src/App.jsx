import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from './components/template/Header';

import HomePage from './pages/HomePage';

import Dashboard from './components/Dashboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userIsLoggedIn: false
    };
  }
  componentWillMount() {
    // TODO: Update burrito-trello to new version for next line to work, replaces following `if` block
    // trelloAuthURL.captureToken();
    if (window.location.href.split('=')[1]) {
      const host = window.location.href.split('#')[0];
      localStorage.setItem('burrito-token', window.location.href.split('=')[1]);
      window.location.href = host;
      return false;
    }

    if (localStorage.getItem('burrito-token')) {
      return this.setState({
        userIsLoggedIn: true
      });
    }

    return true;
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                if (this.state.userIsLoggedIn) return <Dashboard />;
                return <HomePage />;
              }}
            />
            <Route exact path="/about" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('burrito'));
