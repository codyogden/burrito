import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt';

import trello from '../Burrito';

import CommentList from '../components/CommentList';
import CardDesc from '../components/CardDesc';
import CardTitle from '../components/CardTitle';
import { Button, LoadingSpinner } from '../components/atoms';

const styles = {
  contain: {
    maxWidth: '95%',
    width: '600px',
    margin: '0 auto 10px auto',
    boxSizing: 'border-box',
    padding: '10px',
    borderBottom: '1px solid #ccc',
    flex: '1 1 auto'
  }
};

const container = {
  display: 'flex',
  flexFlow: 'row-reverse nowrap',
  maxWidth: '95%',
  width: '600px',
  margin: '0 auto 10px auto',
  boxSizing: 'border-box'
};

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      card: {},
      board: {}
    };
  }
  componentWillMount() {
    this.refreshCard(this.props.match.params.idCard);
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      card: {},
      board: {}
    });
    this.refreshCard(newProps.match.params.idCard);
  }
  refreshCard(idCard) {
    trello
      .cards(idCard)
      .info()
      .then(card => {
        trello
          .boards(card.idBoard)
          .info()
          .then(board => {
            this.setState({ card, board });
          });
      });
  }
  render() {
    if (this.state.card.id)
      return (
        <div style={container}>
          <section>
            <CardTitle board={this.state.board} card={this.state.card} />
            <CardDesc source={this.state.card.desc} />
            <h3 style={styles.contain}>Comments</h3>
            <CommentList card={this.state.card} board={this.state.board} />
          </section>
          <aside>
            <Button size="small" target="_blank" color="grass" href={this.state.card.url}>
              <span>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </span>
            </Button>
          </aside>
        </div>
      );
    return <LoadingSpinner />;
  }
}

Card.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      idCard: PropTypes.string
    })
  }).isRequired
};
