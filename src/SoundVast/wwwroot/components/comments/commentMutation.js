import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation commentMutation(
    $input: SaveCommentInput!
  ) {
    comment(input: $input) {
      comment {
        id
        ...repliesContainer_comment
      },
    }
  }
`;

export default ({ body }, audio) => {
  const variables = {
    input: {
      body,
      audioId: audio.audioId,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
