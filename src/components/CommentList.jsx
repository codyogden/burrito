import React, { Component } from 'react';
import PropTypes from 'prop-types';

import trello from '../Burrito';

import Comment from './Comment';
import { LoadingSpinner } from '../components/atoms';

import styles from './CommentList.scss';

import CommentInput from './CommentInput';

export default class CommentList extends Component {
  constructor() {
    super();
    this.state = {
      comments: false
    };
    this.refreshComments = this.refreshComments.bind(this);
  }
  componentWillMount() {
    this.refreshComments();
  }
  refreshComments() {
    trello
      .cards(this.props.card.id)
      .comments()
      .then(comments => this.setState({ comments }));
  }
  render() {
    if (this.state.comments) {
      if (this.state.comments.length)
        return (
          <div>
            <CommentInput refresh={() => this.refreshComments()} card={this.props.card} board={this.props.board} />
            <ul className={styles.commentList}>
              {this.state.comments.map(comment => <Comment key={comment.id} {...comment} />)}
            </ul>
          </div>
        );
      return <div>No Comments</div>;
    }
    return <LoadingSpinner />;
  }
}

CommentList.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string
  }).isRequired,
  board: PropTypes.shape({
    id: PropTypes.string,
    idOrganization: PropTypes.string
  }).isRequired
};
