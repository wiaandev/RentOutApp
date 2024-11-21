/**
 * @generated SignedSource<<2cd13d53d6710bc1b878729e9d22e118>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type RentType = "APARTMENT" | "DUPLEX" | "FLAT" | "HOUSE" | "PLOT" | "TOWNHOUSE" | "%future added value";
export type PropertyListingsQuery$variables = Record<PropertyKey, never>;
export type PropertyListingsQuery$data = {
  readonly properties: ReadonlyArray<{
    readonly bathroomAmount: number;
    readonly bedroomAmount: number;
    readonly createdAt: any;
    readonly propertyExtras: {
      readonly hasFiber: boolean;
      readonly hasPool: boolean;
    } | null | undefined;
    readonly propertyType: RentType;
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
  "name": "createdAt",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "propertyType",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bedroomAmount",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bathroomAmount",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasFiber",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasPool",
  "storageKey": null
},
v6 = {
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
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PropertyExtras",
            "kind": "LinkedField",
            "name": "propertyExtras",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
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
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PropertyExtras",
            "kind": "LinkedField",
            "name": "propertyExtras",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e65970fb3db1662fe087aff3490d6058",
    "id": null,
    "metadata": {},
    "name": "PropertyListingsQuery",
    "operationKind": "query",
    "text": "query PropertyListingsQuery {\n  properties {\n    createdAt\n    propertyType\n    bedroomAmount\n    bathroomAmount\n    propertyExtras {\n      hasFiber\n      hasPool\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "e99a516a918cb6e0b292f521b451d943";

export default node;
