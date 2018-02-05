import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';

import { Dashboard, Card } from './containers';
import { HomePage, FeaturesPage } from './components/pages';
import Header from './components/Header';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    if (localStorage.getItem('burrito-token')) {
      this.setState({
        userToken: localStorage.getItem('burrito-token')
      });
    }
  }
  render() {
    if (this.state.userToken) {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/:idCard" component={Card} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      );
    }
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/features" component={FeaturesPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

// If a user is being authenticated.
if (window.location.href.split('=')[1]) {
  // Store their token
  localStorage.setItem('burrito-token', window.location.href.split('=')[1]);
  // Redirect them to the home page
  window.location.replace(window.location.href.split('#')[0]);
} else {
  // Otherwise let's render the App
  render(<App />, document.getElementById('burrito'));
}
