/**
 * @flow
 * @relayHash 94492be02711448a4c7aaacf90993f93
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type repliesContainer_comment$ref = any;
export type commentMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    body: string,
    audioId: number,
    originalCommentId?: ?string,
  },
|};
export type commentMutationResponse = {|
  +comment: ?{|
    +comment: {|
      +id: string,
      +$fragmentRefs: repliesContainer_comment$ref,
    |},
  |},
|};
*/


/*
mutation commentMutation(
  $input: SaveCommentInput!
) {
  comment(input: $input) {
    comment {
      id
      ...repliesContainer_comment
    }
  }
}

fragment repliesContainer_comment on Comment {
  id
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
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "commentMutation",
  "id": null,
  "text": "mutation commentMutation(\n  $input: SaveCommentInput!\n) {\n  comment(input: $input) {\n    comment {\n      id\n      ...repliesContainer_comment\n    }\n  }\n}\n\nfragment repliesContainer_comment on Comment {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "commentMutation",
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
              v2,
              {
                "kind": "FragmentSpread",
                "name": "repliesContainer_comment",
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
    "name": "commentMutation",
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
              v2
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '52ee2bb583b95c29cc60c9ad6c5ab3a0';
module.exports = node;
