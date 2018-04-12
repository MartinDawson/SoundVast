import React from 'react';
import PropTypes from 'prop-types';

import Comment from './commentContainer';

const Comments = ({ audio }) => (
  <div>
    {audio.comments.edges.map(({ node }) => (
      <Comment
        key={node.commentId}
        comment={node}
        audio={audio}
      />
    ))}
  </div>
);

Comments.propTypes = {
  audio: PropTypes.shape({
    comments: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          commentId: PropTypes.string.isRequired,
        }),
      })),
    }),
  }).isRequired,
};

export default Comments;
