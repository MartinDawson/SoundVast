import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

const network = Network.create((operation, variables) =>
  fetch('/graphql', {
    method: 'post',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables: JSON.stringify(variables),
    }),
  }).then(response => response.json())
    .then((json) => {
      // https://github.com/facebook/relay/issues/1816
      if (operation.query.operation === 'mutation' && json.errors) {
        return Promise.reject(json.errors);
      }

      return Promise.resolve(json);
    }));

const source = new RecordSource();
const store = new Store(source);
const environment = new Environment({
  network,
  store,
});

export default environment;
