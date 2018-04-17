/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type mobileSideBarContainer_audio$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type radioContainer_liveStream$ref: FragmentReference;
export type radioContainer_liveStream = {|
  +audioId: number,
  +name: string,
  +coverImageUrl: ?string,
  +websiteUrl: ?string,
  +$fragmentRefs: mobileSideBarContainer_audio$ref,
  +$refType: radioContainer_liveStream$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "radioContainer_liveStream",
  "type": "LiveStream",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "audioId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "coverImageUrl",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "websiteUrl",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "mobileSideBarContainer_audio",
      "args": null
    }
  ]
};
(node/*: any*/).hash = 'fcc5f32ad0a54da000f0f28bc6257ab8';
module.exports = node;
