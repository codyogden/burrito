import React from 'react';
import { render } from 'react-dom';


import './App.scss';

const App = () => (
  <div className="app">Hello, world!</div>
);

render(<App />, document.getElementById('burrito'));
