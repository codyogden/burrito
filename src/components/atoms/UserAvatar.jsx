import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './UserAvatar.scss';

export default class UserAvatar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  getAvatarSrc() {
    let avatarSize;
    switch (this.props.size) {
      case 'large':
        avatarSize = 170;
        break;
      case 'medium':
        avatarSize = 50;
        break;
      case 'small':
        avatarSize = 30;
        break;
      default:
        avatarSize = 30;
        break;
    }
    return `https://trello-avatars.s3.amazonaws.com/${this.props.avatarHash}/${avatarSize}.png`;
  }
  render() {
    if (!this.props.avatarHash) {
      return (
        <div className={[styles.user_avatar, styles[this.props.size], styles.user_avatar_none].join(' ')}>
          {this.props.initials}
        </div>
      );
    }
    return (
      <img
        src={this.getAvatarSrc()}
        alt={`${this.props.fullName}`}
        className={[styles.user_avatar, styles[this.props.size]].join(' ')}
      />
    );
  }
}

// User Avatar Property Types
UserAvatar.propTypes = {
  avatarHash: PropTypes.string,
  fullName: PropTypes.string.isRequired,
  size: PropTypes.string,
  initials: PropTypes.string.isRequired
};

// User Avatar Default Properties
UserAvatar.defaultProps = {
  size: 'small',
  avatarHash: null
};
