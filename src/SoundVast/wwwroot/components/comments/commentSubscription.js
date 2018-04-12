import { requestSubscription, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

import environment from '../app/environment/environment';

const subscription = graphql`
  subscription commentSubscription {
    commentAdded {
      id
      commentId
      ...commentContainer_comment
      audio {
        id
      }
    }
  }
`;

export default () => requestSubscription(
  environment,
  {
    subscription,
    onError: error => console.error(error), // eslint-disable-line no-console
    updater: (store) => {
      const commentAdded = store.getRootField('commentAdded');
      const audioRecord = commentAdded.getLinkedRecord('audio');
      const audioId = audioRecord.getValue('id');
      const audioProxy = store.get(audioId);
      const connection = ConnectionHandler.getConnection(
        audioProxy,
        'commentsContainer_comments',
      );

      if (connection) {
        const existingRecords = connection.getLinkedRecords('edges');
        const recordAlreadyExists = existingRecords.some((existingRecord) => {
          const node = existingRecord.getLinkedRecord('node');
          const existingId = node.getValue('id');
          const commentId = commentAdded.getValue('id');

          return existingId === commentId;
        });

        if (!recordAlreadyExists) {
          const edge = ConnectionHandler.createEdge(store, connection, commentAdded, 'CommentPayloadEdge');

          ConnectionHandler.insertEdgeBefore(connection, edge);
        }
      }
    },
  },
);
