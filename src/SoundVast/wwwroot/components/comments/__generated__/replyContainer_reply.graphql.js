/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type replyContainer_reply$ref: FragmentReference;
export type replyContainer_reply = {|
  +body: string,
  +dateAdded: ?any,
  +user: {|
    +userName: string,
  |},
  +originalComment: ?{|
    +body: string,
    +user: {|
      +userName: string,
    |},
  |},
  +$refType: replyContainer_reply$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v1 = {
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
    }
  ]
};
return {
  "kind": "Fragment",
  "name": "replyContainer_reply",
  "type": "Comment",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "dateAdded",
      "args": null,
      "storageKey": null
    },
    v1,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "originalComment",
      "storageKey": null,
      "args": null,
      "concreteType": "Comment",
      "plural": false,
      "selections": [
        v0,
        v1
      ]
    }
  ]
};
})();
(node/*: any*/).hash = '19b97cdc41f9b6e310784bb50fba76a3';
module.exports = node;
