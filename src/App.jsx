import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';

import Header from './components/default/Header';
import aboutPage from './components/views/About';
import Home from './components/views/Home';

import Dashboard from './components/Dashboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: false
    };
  }
  componentWillMount() {
    if (window.location.href.split('=')[1] || localStorage.getItem('trello-token')) {
      if (window.location.href.split('=')[1]) {
        localStorage.setItem('trello-token', window.location.href.split('=')[1]);
      }
      this.setState({
        token: localStorage.getItem('trello-token')
      });
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header user={this.state.token !== null} />
          <Switch>
            <Route exact path="/" render={() => (this.state.token ? <Redirect to="/dashboard" /> : <Home />)} />
            <Route exact path="/dashboard" render={() => (this.state.token ? <Dashboard /> : <Redirect to="/" />)} />
            <Route exact path="/about" component={aboutPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('burrito'));
