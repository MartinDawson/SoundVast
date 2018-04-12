import { compose, flattenProp, withStateHandlers } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import Reply from './reply';

const fragments = graphql`
  fragment replyContainer_reply on Comment {
    body
    dateAdded
    user {
      userName
    }
    originalComment {
      body
      user {
        userName
      }
    }
  }
`;

export default compose(
  fragmentContainer(fragments),
  flattenProp('reply'),
  withStateHandlers({
    originalCommentExpanded: false,
  }, {
    toggleOriginalCommentOverflow: ({ originalCommentExpanded }) => () => ({
      originalCommentExpanded: !originalCommentExpanded,
    }),
  }),

)(Reply);
