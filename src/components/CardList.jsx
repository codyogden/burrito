import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from './Card';
import Loading from './Loading';
import EmptyList from './EmptyList';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 50px auto 0 auto;
  width: 600px;
  max-width: 100%;
`;

export default class CardList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  getBoardName(idBoard) {
    return this.props.boards.find(item => item.id === idBoard).name;
  }
  render() {
    if (this.props.success && this.props.cards.length) {
      return (
        <List>
          {this.props.cards.map(card => (
            <Card key={card.id} boardName={this.getBoardName(card.idBoard)} {...card} />
          ))}
        </List>
      );
    } else if (this.props.success && !this.props.cards.length) {
      return <EmptyList />;
    }
    return <Loading />;
  }
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)),
  success: PropTypes.bool.isRequired,
  boards: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, name: PropTypes.string }))
};

CardList.defaultProps = {
  cards: [],
  boards: []
};
