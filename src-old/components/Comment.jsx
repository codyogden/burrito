import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

import './Comment.scss';

export default class Comment extends Component {
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
      return <div className="user-no-avatar">{member.initials}</div>;
    };
  }
  render() {
    return (
      <li className="comment-item">
        <section>
          <div className="comment-text">
            <ReactMarkdown source={this.props.data.text} />
          </div>
          <footer className="comment-footer">
            <div className="comment-date" title={moment(this.props.date).format('MMMM Do YYYY, h:mm:ss A')}>
              {moment(this.props.date).fromNow()} - <button className="button-comment-reply">Reply</button>
            </div>
            <div className="comment-author">
              <cite className="comment-author-name">{this.props.memberCreator.fullName}</cite>
              {this.avatar(this.props.memberCreator, 30, this.props.memberCreator.fullName, 'comment-avatar')}
            </div>
          </footer>
        </section>
      </li>
    );
  }
}

Comment.propTypes = {
  date: PropTypes.string.isRequired,
  data: PropTypes.shape({
    text: PropTypes.string
  }).isRequired,
  memberCreator: PropTypes.shape({
    fullName: PropTypes.string,
    username: PropTypes.string
  }).isRequired
};
