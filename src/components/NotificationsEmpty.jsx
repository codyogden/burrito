import React, { Component } from 'react';

import styles from './NotificationsEmpty.scss';

const messages = [
  {
    image: 'guacamole',
    message: (
      <span>
        A wild guac appeared.<br /> {"You're"} all caught up!
      </span>
    )
  },
  {
    image: 'nachos',
    message: (
      <span>
        Have some nachos!<br /> {"You're"} all caught up!
      </span>
    )
  },
  {
    image: 'nachos',
    message: (
      <span>
        Notifications? Nacho problem.<br /> {"You're"} all caught up!
      </span>
    )
  },
  {
    image: 'burrito',
    message: (
      <span>
        Go! Go, burrito! Go! Go!<br /> {"You're"} all caught up!
      </span>
    )
  },
  {
    image: 'burrito',
    message: (
      <span>
        Burritos. Definitely a dessert food.<br /> {"You're"} all caught up!
      </span>
    )
  },
  {
    image: 'taco',
    message: (
      <span>
        Taco eaters are heathens, am I right?<br /> {"You're"} all caught up!
      </span>
    )
  },
  {
    image: 'taco',
    message: (
      <span>
        Taco-bout productivity!<br /> {"You're"} all caught up!
      </span>
    )
  }
];

export default class NotificationsEmpty extends Component {
  constructor() {
    super();
    this.state = {
      message: {}
    };
  }
  componentWillMount() {
    this.getRandomMessage();
  }
  getRandomMessage() {
    this.setState({
      message: messages[Math.floor(Math.random() * messages.length)]
    });
  }
  render() {
    return (
      <div className={styles.notificationsEmpty}>
        <div>
          <img
            className={styles.notificationsEmptyImg}
            src={`/assets/${this.state.message.image}.png`}
            alt="Drawing of Burrito"
          />
        </div>
        <div className={styles.notificationsEmptyMsg}>{this.state.message.message}</div>
      </div>
    );
  }
}
