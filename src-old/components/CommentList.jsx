import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

export default class CommentList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <ul className="card-comments-list">
        {this.props.comments.map(comment => <Comment key={comment.id} {...comment} />)}
      </ul>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(Comment.propTypes)).isRequired
};
