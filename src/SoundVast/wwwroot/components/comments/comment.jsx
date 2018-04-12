import React from 'react';
import PropTypes from 'prop-types';

import styles from './comment.less';
import ReplyBox from './common/replyBoxContainer';
import CommentHeader from './common/commentHeaderContainer';
import CommentBody from './common/commentBody';

const Comment = ({
  comment,
  audio,
  user,
  dateAdded,
  body,
}) => (
  <div className={styles.commentTree}>
    <div data-component="comment">
      <CommentHeader userName={user.userName} dateAdded={dateAdded} />
      <CommentBody>{body}</CommentBody>
      {/* <ReplyBox
        rootComment={comment}
        comment={comment}
        audio={audio}
      /> */}
    </div>
    {/* <Replies comment={comment} audio={audio} /> */}
  </div>
);

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  audio: PropTypes.object.isRequired,
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
  }).isRequired,
  dateAdded: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
};

export default Comment;
