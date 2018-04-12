import { compose } from 'recompose';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import Comments from './comments';

const fragments = graphql`
  fragment commentsContainer_audio on Audio {
    id
    ...commentBoxContainer_audio
    ...replyBoxContainer_audio
    comments(
      first: $count
      after: $cursor
    ) @connection(key: "commentsContainer_comments") {
      edges {
        node {
          commentId
          ...commentContainer_comment
        }
      }
    }
  }
`;

export default compose(
  fragmentContainer(fragments),
)(Comments);
