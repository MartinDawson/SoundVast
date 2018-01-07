import React from 'react';
import PropTypes from 'prop-types';

import Like from '../rating/like/likeCommentContainer';
import Dislike from '../rating/dislike/dislikeCommentContainer';
import Rating from '../rating/audioRating';
import Flag from '../flag/flag';
import styles from './comment.less';

const Comment = ({
  user,
  dateAdded,
  body,
  commentId,
  likes,
  dislikes,
  children,
}) => (
  <div className={styles.comment}>
    <div>
      <span className={styles.userName}>{user.userName}</span>
      <span className={styles.dateAdded}>{dateAdded}</span>
    </div>
    <div className={styles.body}>{body}</div>
    <Rating likes={likes} dislikes={dislikes}>
      <Like commentId={commentId} />
      <Dislike commentId={commentId} />
    </Rating>
    <Flag modalId="flagComment" id={commentId} />
    {children}
  </div>
);

Comment.defaultProps = {
  children: null,
};

Comment.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
  }).isRequired,
  dateAdded: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  commentId: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default Comment;
