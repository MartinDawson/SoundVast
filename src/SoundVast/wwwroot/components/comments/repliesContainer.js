import { compose, flattenProp, withStateHandlers } from 'recompose';
import { graphql } from 'react-relay';
import { paginationContainer } from 'recompose-relay-modern';

import Replies from './replies';

const fragments = graphql`
  fragment repliesContainer_comment on Comment
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 0 }
  ) {
    id
  }
`;

const connectionConfig = {
  direction: 'forward',
  query: graphql`
    query repliesContainerForwardQuery(
      $id: ID!
      $count: Int!
    ) {
      node(id: $id) {
        ...repliesContainer_comment @arguments(count: $count)
      }
    }
  `,
  getVariables: (props, { count, cursor }) => ({
    count,
    cursor,
    id: props.comment.id,
  }),
};

export default compose(
  paginationContainer(fragments, connectionConfig),
  flattenProp('comment'),
  withStateHandlers({
    showingReplies: false,
  }, {
    toggleReplies: ({ showingReplies }, { relay, replies }) => () => {
      relay.refetchConnection(!showingReplies ? replies.totalCount : 0);

      return {
        showingReplies: !showingReplies,
      };
    },
  }),
)(Replies);
