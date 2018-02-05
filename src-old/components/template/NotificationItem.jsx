import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './NotificationItem.scss';

export default class NotificationItem extends Component {
  constructor() {
    super();
    this.state = {};
    this.avatar = (member, size = 170, alt = false, className = 'userAvatar') => {
      if (member.avatarHash)
        return (
          <img
            className={className}
            alt={alt}
            src={`https://trello-avatars.s3.amazonaws.com/${member.avatarHash}/${size}.png`}
          />
        );
      return <div className={styles.userNoAvatar}>{member.initials}</div>;
    };
  }
  render() {
    return (
      <li key={this.props.id} className={styles.notificationItem}>
        <div className={styles.notificationMessage}>
          {this.props.data.text.length > 150 ? `${this.props.data.text.slice(0, 150)}...` : this.props.data.text}
        </div>
        <div className={styles.notificationMeta}>
          <div>
            {this.avatar(this.props.memberCreator, 30, this.props.memberCreator.fullName, 'notification-avatar')}
          </div>
          <div className={styles.notificationCardInfo}>
            <div>
              <Link href={`/${this.props.data.card.id}`} to={`/${this.props.data.card.id}`}>
                {this.props.data.card.name}
              </Link>
            </div>
            <div>{this.props.data.board.name}</div>
          </div>
        </div>
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    board: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      shortLink: PropTypes.string
    }),
    card: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      shortLink: PropTypes.string
    }),
    text: PropTypes.string
  }).isRequired,
  memberCreator: PropTypes.shape({
    avatarHash: PropTypes.string,
    fullName: PropTypes.string,
    username: PropTypes.username
  }).isRequired
};
