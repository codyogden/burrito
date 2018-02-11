import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { UserAvatar } from './atoms';

import styles from './Comment.scss';

export default class Comment extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <li className={styles.commentItem}>
        <div className={styles.memberInfo}>
          <UserAvatar {...this.props.memberCreator} />
          <span className={styles.memberName}>{this.props.memberCreator.fullName}</span>
        </div>
        <div className={styles.commentText}>{this.props.data.text}</div>
        <div className={styles.commentDate}>{moment(this.props.date).fromNow()}</div>
      </li>
    );
  }
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    text: PropTypes.string,
    card: PropTypes.shape({
      shortLink: PropTypes.string
    })
  }).isRequired,
  memberCreator: PropTypes.shape(UserAvatar.propTypes).isRequired,
  date: PropTypes.string.isRequired
};
