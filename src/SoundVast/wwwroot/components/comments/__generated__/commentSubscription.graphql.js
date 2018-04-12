/**
 * @flow
 * @relayHash abb702bf993812a16609c25d5ac3b4d1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type commentContainer_comment$ref = any;
export type commentSubscriptionVariables = {| |};
export type commentSubscriptionResponse = {|
  +commentAdded: ?{|
    +id: string,
    +commentId: string,
    +audio: {|
      +id: ?string,
    |},
    +$fragmentRefs: commentContainer_comment$ref,
  |},
|};
*/


/*
subscription commentSubscription {
  commentAdded {
    id
    commentId
    ...commentContainer_comment
    audio {
      __typename
      id
    }
  }
}

fragment commentContainer_comment on Comment {
  id
  body
  dateAdded
  user {
    userName
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "commentId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "commentSubscription",
  "id": null,
  "text": "subscription commentSubscription {\n  commentAdded {\n    id\n    commentId\n    ...commentContainer_comment\n    audio {\n      __typename\n      id\n    }\n  }\n}\n\nfragment commentContainer_comment on Comment {\n  id\n  body\n  dateAdded\n  user {\n    userName\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "commentSubscription",
    "type": "AppSubscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "commentAdded",
        "storageKey": null,
        "args": null,
        "concreteType": "Comment",
        "plural": false,
        "selections": [
          v0,
          v1,
          {
            "kind": "FragmentSpread",
            "name": "commentContainer_comment",
            "args": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "audio",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              v0
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "commentSubscription",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "commentAdded",
        "storageKey": null,
        "args": null,
        "concreteType": "Comment",
        "plural": false,
        "selections": [
          v0,
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "body",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "dateAdded",
            "args": null,
            "storageKey": null
          },
          {
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
              v0
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "audio",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              },
              v0
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '92dd631c066cf1022fa91e719999451f';
module.exports = node;
