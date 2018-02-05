import React, { Component } from 'react';

import trello from '../Burrito';

import NotificationsList from '../components/NotificationsList';

export default class Notifications extends Component {
  constructor() {
    super();
    this.state = {
      notifications: []
    };
    this.refreshNotifications = this.refreshNotifications.bind(this);
    this.pauseRefresh = this.pauseRefresh.bind(this);
    this.startRefresh = this.startRefresh.bind(this);
  }
  componentWillMount() {
    this.refreshNotifications();
  }
  componentDidMount() {
    this.interval = setInterval(this.refreshNotifications, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  refreshNotifications() {
    const filters = [
      'addedToBoard',
      'removedFromBoard',
      'addedToCard',
      'removedFromCard',
      'addedToOrganization',
      'removedFromOrganization',
      'mentionedOnCard',
      'commentCard'
    ];

    trello
      .members('me')
      .notifications({
        filter: filters.join(','),
        read_filter: 'unread'
      })
      .then(notifications => {
        this.setState({ notifications });
      });
  }
  pauseRefresh() {
    clearInterval(this.interval);
  }
  startRefresh() {
    this.refreshNotifications();
    this.interval = setInterval(this.refreshNotifications, 2000);
  }
  render() {
    return (
      <NotificationsList
        pause={() => this.pauseRefresh()}
        start={() => this.startRefresh()}
        items={this.state.notifications}
      />
    );
  }
}
