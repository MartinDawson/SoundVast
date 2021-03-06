import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation resetPasswordMutation(
    $input: ResetPasswordInput!
  ) {
    resetPassword(input: $input) {
      clientMutationId,
    }
  }
`;

export default ({ password, userId, token }) => {
  const variables = {
    input: {
      password,
      userId,
      token,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
