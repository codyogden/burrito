import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { cardList } from './CardList.scss';

import CardItem from './CardItem';

export default class CardList extends Component {
  constructor() {
    super();
    this.state = {};
    this.board = this.board.bind(this);
  }
  board(idBoard) {
    return this.props.boards.find(board => board.id === idBoard);
  }
  render() {
    return (
      <ul className={cardList}>
        {this.props.cards.map(card => <CardItem key={card.id} board={this.board(card.idBoard)} {...card} />)}
      </ul>
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.id,
      idBoard: PropTypes.string
    })
  ).isRequired,
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string
    })
  ).isRequired
};
