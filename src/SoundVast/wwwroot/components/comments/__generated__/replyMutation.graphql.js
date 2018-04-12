/**
 * @flow
 * @relayHash dda7400ff10b781990a1108b37429da5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type replyContainer_reply$ref = any;
export type replyMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    body: string,
    audioId: number,
    originalCommentId?: ?string,
  },
|};
export type replyMutationResponse = {|
  +comment: ?{|
    +comment: {|
      +$fragmentRefs: replyContainer_reply$ref,
    |},
  |},
|};
*/


/*
mutation replyMutation(
  $input: SaveCommentInput!
) {
  comment(input: $input) {
    comment {
      ...replyContainer_reply
      id
    }
  }
}

fragment replyContainer_reply on Comment {
  body
  dateAdded
  user {
    userName
    id
  }
  originalComment {
    body
    user {
      userName
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SaveCommentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "SaveCommentInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "ApplicationUser",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "userName",
      "args": null,
      "storageKey": null
    },
    v3
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "replyMutation",
  "id": null,
  "text": "mutation replyMutation(\n  $input: SaveCommentInput!\n) {\n  comment(input: $input) {\n    comment {\n      ...replyContainer_reply\n      id\n    }\n  }\n}\n\nfragment replyContainer_reply on Comment {\n  body\n  dateAdded\n  user {\n    userName\n    id\n  }\n  originalComment {\n    body\n    user {\n      userName\n      id\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "replyMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "comment",
        "storageKey": null,
        "args": v1,
        "concreteType": "SaveCommentPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comment",
            "storageKey": null,
            "args": null,
            "concreteType": "Comment",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "replyContainer_reply",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "replyMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "comment",
        "storageKey": null,
        "args": v1,
        "concreteType": "SaveCommentPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "comment",
            "storageKey": null,
            "args": null,
            "concreteType": "Comment",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "dateAdded",
                "args": null,
                "storageKey": null
              },
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "originalComment",
                "storageKey": null,
                "args": null,
                "concreteType": "Comment",
                "plural": false,
                "selections": [
                  v2,
                  v4,
                  v3
                ]
              },
              v3
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '0a94c8449c8b04a507ea9aed03698973';
module.exports = node;
