import { compose, flattenProp } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import Comment from './comment';

const fragments = graphql`
  fragment commentContainer_comment on Comment {
    id
    body
    dateAdded
    user {
      userName
    }
  }
`;

export default compose(
  fragmentContainer(fragments),
  flattenProp('comment'),
)(Comment);
