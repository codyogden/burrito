import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';

import styles from './LoadingSpinner.scss';

export default class LoadingSpinner extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <main className={styles.spinnerContainer}>
        <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />
      </main>
    );
  }
}
