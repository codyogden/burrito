import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MentionsInput, Mention } from 'react-mentions';

import { UserAvatar } from './atoms';

import trello from '../Burrito';

import styles from './CommentInputStyle';

const memberSuggestion = entry => (
  <div>
    <div>
      <UserAvatar {...entry.member} />
    </div>
    <div>{entry.display}</div>
  </div>
);

export default class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchUsers = this.searchUsers.bind(this);
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    if (e.keyCode === 13 && (e.metaKey || e.ctrlKey)) {
      this.submitComment();
    }
  }
  submitComment() {
    if (this.state.value.length)
      trello
        .cards(this.props.card.id)
        .addComment(this.state.value)
        .then(() => {
          this.props.refresh();
          this.setState({
            value: ''
          });
        });
  }
  searchUsers(query, callback) {
    if (query.length)
      trello
        .searchMembers({
          query,
          idBoard: this.props.board.id,
          idOrganization: this.props.board.idOrganization
        })
        .then(result => {
          const adjustedMembers = [];
          result.map(member =>
            adjustedMembers.push({
              id: member.username,
              display: member.fullName,
              member
            })
          );
          return adjustedMembers;
        })
        .then(result => callback(result));
  }
  render() {
    return (
      <div>
        <MentionsInput
          markup="(__id__)"
          onChange={this.handleChange}
          onKeyDown={this.handleChange}
          value={this.state.value}
          displayTransform={id => `@${id}`}
          style={styles}
        >
          <Mention trigger="@" data={this.searchUsers} appendSpaceOnAdd="true" renderSuggestion={memberSuggestion} />
        </MentionsInput>
      </div>
    );
  }
}

CommentInput.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string
  }).isRequired,
  board: PropTypes.shape({
    id: PropTypes.string,
    idOrganization: PropTypes.string
  }).isRequired,
  refresh: PropTypes.func.isRequired
};
