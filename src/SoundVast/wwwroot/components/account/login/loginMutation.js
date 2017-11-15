import { graphql } from 'react-relay';
import { createMutation } from 'relay-compose';

import { showLoginPopup } from '../actions';

const mutation = graphql`
  mutation loginMutation(
    $input: LoginInput!
  ) {
    login(input: $input) {
      user {
        id,
        userName
      }
    }
  }
`;

export default ({ username, password, rememberMe }, dispatch) => {
  const variables = {
    input: {
      username,
      password,
      rememberMe,
    },
  };

  return createMutation(
    mutation,
    variables,
    null,
    null,
    (store) => {
      const login = store.getRootField('login');

      if (login !== null) {
        const user = login.getLinkedRecord('user');
        const root = store.getRoot();

        root.setLinkedRecord(user, 'user');
      }
    },
  ).then(() => {
    dispatch(showLoginPopup());
  });
};
