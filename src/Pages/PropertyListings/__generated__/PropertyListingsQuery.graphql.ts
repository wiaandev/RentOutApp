/**
 * @generated SignedSource<<aa41695c625b7d6d7de8abb94a942623>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PropertyListingsQuery$variables = Record<PropertyKey, never>;
export type PropertyListingsQuery$data = {
  readonly properties: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"PropertyListingsCard_query">;
  }>;
};
export type PropertyListingsQuery = {
  response: PropertyListingsQuery$data;
  variables: PropertyListingsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PropertyListingsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PropertyPost",
        "kind": "LinkedField",
        "name": "properties",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PropertyListingsCard_query"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PropertyListingsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PropertyPost",
        "kind": "LinkedField",
        "name": "properties",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "propertyType",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "parkingAmount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "weeklyAmount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "bathroomAmount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "bedroomAmount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PropertyExtras",
            "kind": "LinkedField",
            "name": "propertyExtras",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPatio",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasGarden",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "petsAllowed",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasFlatlet",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPool",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasFiber",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5b54e46f59764c17f7df1e0b9a6c4cfe",
    "id": null,
    "metadata": {},
    "name": "PropertyListingsQuery",
    "operationKind": "query",
    "text": "query PropertyListingsQuery {\n  properties {\n    ...PropertyListingsCard_query\n    id\n  }\n}\n\nfragment PropertyListingsCard_query on PropertyPost {\n  id\n  propertyType\n  createdAt\n  parkingAmount\n  weeklyAmount\n  bathroomAmount\n  bedroomAmount\n  propertyExtras {\n    id\n    hasPatio\n    hasGarden\n    petsAllowed\n    hasFlatlet\n    hasPool\n    hasFiber\n  }\n}\n"
  }
};
})();

(node as any).hash = "ed8e51d8eb7e2fd5160a879c78574803";

export default node;
