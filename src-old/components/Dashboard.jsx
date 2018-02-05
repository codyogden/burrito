import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { trello } from '../Burrito';

const CardItem = props => (
  <li>
    <Link to={`/${props.id}`} href={`/${props.id}`}>
      {props.name}
    </Link>
  </li>
);

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
    this.refreshCards = this.refreshCards.bind(this);
  }
  componentWillMount() {
    this.refreshCards();
  }
  // componentDidMount() {
  //   this.interval = setInterval(this.refreshCards, 2000);
  // }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  refreshCards() {
    trello
      .members('me')
      .cards()
      .then(result => {
        this.setState({
          cards: result
        });
      });
  }
  render() {
    return (
      <div>
        <ul>{this.state.cards.map(card => <CardItem key={card.id} {...card} />)}</ul>
      </div>
    );
  }
}
