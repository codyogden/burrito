import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

import LogoutButton from './LogoutButton';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 10px 0 10px;
  align-items: center;
  h1 {
    font-size: 16px;
    font-weight: normal;
    margin: 0;
  }
  a {
    color: currentColor;
    text-decoration: none;
    padding: 5px 8px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover,
    &:focus {
      background-color: #efefef;
    }
  }
  nav ul {
    margin: 0;
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    li {
      font-size: 1.25em;
      padding: 0 5px;
    }
  }
`;

const menuItems = () => {
  const itemsArr = [];
  // Always Included
  itemsArr.push(
    <li>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/codyogden/burrito"
        title="Burrito on Github"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </li>
  );

  // Included for Users
  if (localStorage.getItem('burrito-token')) {
    itemsArr.push(
      <li>
        <LogoutButton />
      </li>
    );
  }

  // Reutrn all items
  return itemsArr;
};

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Container>
        <h1>
          <Link to="/" href="/" title="Burrito">
            Burrito
          </Link>
        </h1>
        <nav>
          <ul>{menuItems()}</ul>
        </nav>
      </Container>
    );
  }
}
