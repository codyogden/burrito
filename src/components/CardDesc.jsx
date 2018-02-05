import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import markdown from '../slimdown';

import styles from './CardDesc.scss';

export default class CardDesc extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return(
      <div className={styles.cardDesc}>
        <ReactMarkdown source={markdown.parse(this.props.source)} />
      </div>
    );
  }
}

CardDesc.propTypes = {
  source: PropTypes.string
};

CardDesc.defaultProps = {
  source: ''
};
