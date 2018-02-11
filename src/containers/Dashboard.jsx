import React, { Component } from 'react';

import { LoadingSpinner } from '../components/atoms';

import CardList from '../components/CardList';

import trello from '../Burrito';

const styles = {
  contain: {
    maxWidth: '95%',
    width: '600px',
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: '10px',
    borderBottom: '1px solid #ccc'
  }
};

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      boards: []
    };
  }
  componentWillMount() {
    trello.batch([`/members/me/boards`, `/members/me/cards`]).then(result => {
      this.setState({
        boards: result[0][200],
        cards: result[1][200]
      });
    });
  }
  render() {
    if (this.state.cards.length)
      return (
        <div>
          <main>
            <h2 style={styles.contain}>My Cards</h2>
            <CardList cards={this.state.cards} boards={this.state.boards} />
          </main>
        </div>
      );
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
}
