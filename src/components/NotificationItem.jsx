import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';

import trello from '../Burrito';

import { UserAvatar } from './atoms';

import styles, { notification } from './NotificationItem.scss';

export default class NotificationItem extends Component {
  constructor() {
    super();
    this.state = {
      unread: true
    };
    this.markRead = this.markRead.bind(this);
  }
  componentWillMount() {
    this.setState({
      unread: this.props.unread
    });
  }
  markRead() {
    trello
      .notifications(this.props.id)
      .markAsRead()
      .then(() =>
        this.setState({
          unread: false
        })
      );
  }
  render() {
    const actions = {
      addedToBoard: () => (
        <span>
          added you to{' '}
          <span className={styles.entityName}>
            <a
              href={`https://trello.com/b/${this.props.data.board}`}
              target="_blank"
              title={this.props.data.board.name}
            >
              {this.props.data.board.name}
            </a>
          </span>.
        </span>
      ),
      removedFromBoard: () => (
        <span>
          removed you from{' '}
          <span className={styles.entityName}>
            <a
              href={`https://trello.com/b/${this.props.data.board}`}
              target="_blank"
              title={this.props.data.board.name}
            >
              {this.props.data.board.name}
            </a>
          </span>.
        </span>
      ),
      addedToCard: () => (
        <span>
          added you to{' '}
          <span className={styles.entityName}>
            <Link to={`/${this.props.data.card.id}`} href={`/${this.props.data.card.id}`}>
              {this.props.data.card.name}
            </Link>
          </span>.
        </span>
      ),
      removedFromCard: () => (
        <span>
          removed you from{' '}
          <span className={styles.entityName}>
            <Link to={`/${this.props.data.card.id}`} href={`/${this.props.data.card.id}`}>
              {this.props.data.card.name}
            </Link>
          </span>.
        </span>
      ),
      addedToOrganization: () => (
        <span>
          added you to <span className={styles.entityName}>{this.props.data.organization.name}</span>.
        </span>
      ),
      removedFromOrganization: () => (
        <span>
          removed you from <span className={styles.entityName}>{this.props.data.organization.name}</span>.
        </span>
      ),
      mentionedOnCard: () => (
        <span>
          mentioned you on{' '}
          <span className={styles.entityName}>
            <Link to={`/${this.props.data.card.id}`} href={`/${this.props.data.card.id}`}>
              {this.props.data.card.name}
            </Link>
          </span>.
        </span>
      ),
      commentCard: () => (
        <span>
          commented on{' '}
          <span className={styles.entityName}>
            <Link to={`/${this.props.data.card.id}`} href={`/${this.props.data.card.id}`}>
              {this.props.data.card.name}
            </Link>
          </span>.
        </span>
      )
    };
    return (
      <li className={[notification, this.state.unread ? styles.unread : styles.read].join(' ')}>
        <div className={styles.avatarContainer}>
          <UserAvatar {...this.props.memberCreator} size="small" />
        </div>
        <div className={styles.notificationContent}>
          {this.props.memberCreator.fullName} {actions[this.props.type]()}
          <div className={[styles.notificationText, !this.props.data.text ? styles.hide : ''].join(' ')}>
            {this.props.data.text && this.props.data.text.length > 200
              ? `${this.props.data.text.substring(0, 200)}...`
              : this.props.data.text}
          </div>
        </div>
        <div className={styles.notificationActions}>
          <button
            className={[styles.notificationButtons, !this.state.unread ? styles.hide : ''].join(' ')}
            onClick={this.markRead}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.string.isRequired,
  unread: PropTypes.bool.isRequired,
  memberCreator: PropTypes.shape(UserAvatar.propTypes).isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    board: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string
    }),
    card: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string
    }),
    organization: PropTypes.shape({
      name: PropTypes.string
    }),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
  })
};

NotificationItem.defaultProps = {
  data: {
    board: {
      name: ''
    },
    card: {
      name: ''
    },
    organization: {
      name: ''
    },
    text: false
  }
};
