/**
 * @flow
 * @relayHash 1975f21fb5f10a5d08888935e71d5fd1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type repliesContainer_comment$ref = any;
export type repliesContainerForwardQueryVariables = {|
  id: string,
  count: number,
|};
export type repliesContainerForwardQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: repliesContainer_comment$ref,
  |},
|};
*/


/*
query repliesContainerForwardQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...repliesContainer_comment_yu5n1
    id
  }
}

fragment repliesContainer_comment_yu5n1 on Comment {
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "repliesContainerForwardQuery",
  "id": null,
  "text": "query repliesContainerForwardQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...repliesContainer_comment_yu5n1\n    id\n  }\n}\n\nfragment repliesContainer_comment_yu5n1 on Comment {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "repliesContainerForwardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "repliesContainer_comment",
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "repliesContainerForwardQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'd0b24e867b3cef98ffe8bd69314bd9f5';
module.exports = node;
