import React, { Component } from 'react';

import './Dashboard.scss';

import CardItem from './CardItem';
import Card from './Card';

const cardData = require('./Cards.json');

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: null
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id) {
    this.setState({
      card: id
    });
  }
  render() {
    return (
      <div className="dashboard-wrapper">
        <div className="dashboard-list-wrapper">
          <ul className="dashboard-list">
            {cardData.map(card => (
              <CardItem key={card.id} active={this.state.card === card.id} onItemClick={this.handleClick} {...card} />
            ))}
          </ul>
        </div>
        <Card {...cardData[this.state.card - 1]} />
      </div>
    );
  }
}
