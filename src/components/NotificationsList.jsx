import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBell from '@fortawesome/fontawesome-free-regular/faBell';
import faBellSolid from '@fortawesome/fontawesome-free-solid/faBell';

import NotificationItem from './NotificationItem';
import NotificationsEmpty from './NotificationsEmpty';

import styles from './NotificationsList.scss';

export default class NotificationsList extends Component {
  constructor() {
    super();
    this.state = {
      display: false
    };
    this.toggleNotifications = this.toggleNotifications.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }
  componentWillUnmount() {
    if (this.state.display) {
      document.removeEventListener('click', this.handleOutsideClick, false);
      document.removeEventListener('keydown', this.handleOutsideClick, false);
    }
  }
  toggleNotifications() {
    if (!this.state.display) {
      document.addEventListener('click', this.handleOutsideClick, false);
      document.addEventListener('keydown', this.handleOutsideClick, false);
      this.props.pause();
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
      document.removeEventListener('keydown', this.handleOutsideClick, false);
      this.props.start();
    }
    this.setState({
      display: !this.state.display
    });
  }
  handleOutsideClick(e) {
    if (!this.node || !this.node.contains(e.target) || e.keyCode === 27) {
      this.toggleNotifications();
    }
  }
  render() {
    return (
      <div
        className={styles.notifications}
        ref={node => {
          this.node = node;
        }}
      >
        <button className={styles.notificationToggle} onClick={this.toggleNotifications}>
          <FontAwesomeIcon icon={this.props.items.length ? faBellSolid : faBell} />
        </button>
        <div className={styles.notificationsContainer}>
          <ul
            className={[
              styles.notificationsList,
              this.state.display && this.props.items.length ? styles.open : styles.closed
            ].join(' ')}
          >
            {this.props.items.map(item => <NotificationItem {...item} key={item.id} />)}
          </ul>
          <div className={this.state.display && !this.props.items.length ? styles.open : styles.closed}>
            <NotificationsEmpty />
          </div>
        </div>
      </div>
    );
  }
}

NotificationsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string
    })
  ).isRequired,
  start: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired
};
