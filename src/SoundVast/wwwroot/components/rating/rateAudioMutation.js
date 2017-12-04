import { graphql } from 'react-relay';
import { createMutation } from 'relay-modern-hoc';

const mutation = graphql`
  mutation rateAudioMutation(
    $input: RateInput!
  ) {
    rateAudio(input: $input) {
      rating {
        audio {
          likes
          dislikes
        }
      }
    }
  }
`;

export default (id, liked) => {
  const variables = {
    input: {
      id,
      liked,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
