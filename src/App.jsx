import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';
import aboutPage from './components/About';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/about" component={aboutPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('burrito'));
