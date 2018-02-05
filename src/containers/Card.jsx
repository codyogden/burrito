import React, { Component } from 'react';
import PropTypes from 'prop-types';

import trello from '../Burrito';

import CommentList from '../components/CommentList';
import CardDesc from '../components/CardDesc';
import CardTitle from '../components/CardTitle';
import { LoadingSpinner } from '../components/atoms';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      card: {},
      board: {}
    };
  }
  componentWillMount() {
    trello
      .cards(this.props.match.params.idCard)
      .info()
      .then(card => {
        trello
          .boards(card.idBoard)
          .info()
          .then(board =>{
            this.setState({ card, board })
          });
      });
  }
  render() {
    console.log('card', this.state.card);
    console.log('board', this.state.board);
    if(this.state.card.id)
      return (
        <section>
          <CardTitle board={this.state.board} card={this.state.card} />
          <CardDesc source={this.state.card.desc} />
          <CommentList idCard={this.props.match.params.idCard} />
        </section>
      );
    return (
      <LoadingSpinner />
    );
  }
}

Card.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      idCard: PropTypes.string
    })
  }).isRequired
};
