import React from 'react';
import { Link } from 'react-router-dom';

require('./Header.scss');
const menuItems = require('./Menu.json');

const menuItemLink = link => {
  if (link.internal) {
    return (
      <Link to={link.url} href={link.url}>
        {link.text}
      </Link>
    );
  }
  return (
    <a href={link.url} target="_blank">
      {link.text}
    </a>
  );
};

const Header = () => (
  <header>
    <h1>
      <Link to="/" href="/">
        Burrito
      </Link>
    </h1>
    <nav>
      <ul>{menuItems.map(link => <li key={link.text}>{menuItemLink(link)}</li>)}</ul>
    </nav>
  </header>
);

export default Header;
