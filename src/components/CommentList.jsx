import React, { Component } from 'react';
import PropTypes from 'prop-types';

import trello from '../Burrito';

import Comment from './Comment';
import { LoadingSpinner } from '../components/atoms';

import styles from './CommentList.scss';

export default class CommentList extends Component {
  constructor() {
    super();
    this.state = {
      comments: false
    };
  }
  componentWillMount() {
    this.refreshComments();
  }
  refreshComments() {
    trello
      .cards(this.props.idCard)
      .comments()
      .then(comments => this.setState({ comments }));
  }
  render() {

    if(this.state.comments) {
      if(this.state.comments.length)
        return <ul className={styles.commentList}>{this.state.comments.map(comment => <Comment key={comment.id} {...comment} />)}</ul>;
      return <div>No Comments</div>
    }
    return <LoadingSpinner />
  }
}

CommentList.propTypes = {
  idCard: PropTypes.string.isRequired
};
