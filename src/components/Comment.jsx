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
    console.log(this.props);
    return (
      <li className={styles.commentItem}>
        <UserAvatar {...this.props.memberCreator} />
        {this.props.memberCreator.fullName}
        {this.props.data.text}
        {moment(this.props.date).fromNow()}
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
