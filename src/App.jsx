import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'normalize.css';

import trello from './Burrito';
import { CardList, LoginButton, Header } from './components';

import './style.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userToken: false,
      cards: [],
      boards: []
    };
  }
  componentWillMount() {
    if (localStorage.getItem('burrito-token')) {
      this.setState({
        userToken: localStorage.getItem('burrito-token')
      });
      this.refreshList();
    }
  }
  refreshList() {
    trello
      .members('me')
      .boards()
      .then(boards => {
        this.setState({ boards });
        trello
          .members('me')
          .cards()
          .then(cards => {
            this.setState({ cards });
          });
      });
  }
  render() {
    if (this.state.userToken) {
      return (
        <div>
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route exact path="/" render={() => <CardList boards={this.state.boards} cards={this.state.cards} />} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      );
    }
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route
                path="/"
                render={() => (
                  <div>
                    <LoginButton color="grass">Login With Trello</LoginButton>
                  </div>
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// If a user is being authenticated.
if (window.location.href.split('=')[1]) {
  // Ensure that token is valid.
  // Store their token
  localStorage.setItem('burrito-token', window.location.href.split('=')[1]);
  // Redirect them to the home page
  window.location.replace(window.location.href.split('#')[0]);
} else {
  // Otherwise let's render the App
  render(<App />, document.getElementById('burrito'));
}
