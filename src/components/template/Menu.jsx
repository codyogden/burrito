import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Menu.scss';

const Item = props => (
  <li>
    <Link to={props.link} href={props.link}>
      {props.text}
    </Link>
  </li>
);

Item.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav>
          <ul>{this.props.items.map(item => <Item key={item.text} {...item} />)}</ul>
        </nav>
      </div>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any)
};

Menu.defaultProps = {
  items: []
};
