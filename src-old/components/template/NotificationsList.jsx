import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NotificationItem from './NotificationItem';
import NotificationsEmpty from './NotificationsEmpty';

import styles from './NotificationsList.scss';

export default class NotificationList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    if (this.props.items.length) {
      return (
        <ul className={styles.NotificationsList}>
          {this.props.items.map(item => <NotificationItem key={item.id} {...item} />)}
        </ul>
      );
    }
    return <NotificationsEmpty />;
  }
}

NotificationList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(NotificationItem.propTypes)).isRequired
};
