import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBell from '@fortawesome/fontawesome-free-regular/faBell';
import faCheckCircle from '@fortawesome/fontawesome-free-regular/faCheckCircle';
import faBellSolid from '@fortawesome/fontawesome-free-solid/faBell';

import { trello } from '../../Burrito';

import NotificationsList from './NotificationsList';

import styles from './Notifications.scss';

export default class Notifications extends Component {
  constructor() {
    super();
    this.state = {
      display: false,
      notifications: []
    };
    this.toggleNotifications = this.toggleNotifications.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.markAllNotificationsRead = this.markAllNotificationsRead.bind(this);
    this.refreshNotifications = this.refreshNotifications.bind(this);
  }
  componentWillMount() {
    trello
      .members('me')
      .notifications({
        filter:
          'addedToBoard,removedFromBoard,addedToCard,removedFromCard,addedToOrganization,removedFromOrganization,mentionedOnCard,commentCard',
        read_filter: 'unread'
      })
      .then(result => {
        this.setState({
          notifications: result
        });
      });
  }
  componentDidMount() {
    this.interval = setInterval(this.refreshNotifications, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  refreshNotifications() {
    if (!this.state.display)
      trello
        .members('me')
        .notifications({ filter: 'mentionedOnCard,commentCard', read_filter: 'unread' })
        .then(result => {
          this.setState({
            notifications: result
          });
        });
  }
  toggleNotifications() {
    if (!this.state.display) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
      this.setState({
        notifications: []
      });
      this.refreshNotifications();
    }
    this.setState({
      display: !this.state.display
    });
  }
  handleOutsideClick(e) {
    if (!this.node.contains(e.target)) {
      this.toggleNotifications();
    }
  }
  markAllNotificationsRead() {
    trello
      .notifications()
      .markAllAsRead()
      .then(() => {
        this.refreshNotifications();
        this.toggleNotifications();
      });
  }
  render() {
    const status = this.state.notifications.length;
    return (
      <div
        className={styles.notificationsContainer}
        ref={node => {
          this.node = node;
        }}
      >
        <button
          aria-label={`${this.state.display ? 'Hide' : 'Show'} Notifications`}
          onClick={this.toggleNotifications}
          className={[styles.notificationsToggle, status ? 'unread' : 'empty'].join(' ')}
        >
          <FontAwesomeIcon icon={status ? faBellSolid : faBell} />
        </button>
        <div className={this.state.display ? styles.notificationsActive : styles.notifications}>
          <NotificationsList items={this.state.notifications} />
          <div className={[styles.notificationsActions, status ? '' : 'empty'].join(' ')}>
            <button
              title="Mark All Notifications as Read"
              aria-label="Mark All Notifications as Read"
              onClick={this.markAllNotificationsRead}
            >
              <span>Mark All As Read</span>
              <FontAwesomeIcon icon={faCheckCircle} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
