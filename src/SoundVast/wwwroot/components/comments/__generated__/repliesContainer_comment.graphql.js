/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type repliesContainer_comment$ref: FragmentReference;
export type repliesContainer_comment = {|
  +id: string,
  +$refType: repliesContainer_comment$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "repliesContainer_comment",
  "type": "Comment",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 0
    }
  ],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = 'bf4452f6e2bcb78eb05d4aa34b88f1f5';
module.exports = node;
