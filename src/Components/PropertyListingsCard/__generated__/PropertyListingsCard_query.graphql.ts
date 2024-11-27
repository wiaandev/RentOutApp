/**
 * @generated SignedSource<<b281b38353e10d1ac9bf11b79da8001b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type RentType = "APARTMENT" | "DUPLEX" | "FLAT" | "HOUSE" | "PLOT" | "TOWNHOUSE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type PropertyListingsCard_query$data = {
  readonly bathroomAmount: number;
  readonly bedroomAmount: number;
  readonly createdAt: any;
  readonly id: string;
  readonly parkingAmount: number;
  readonly propertyExtras: {
    readonly hasFiber: boolean;
    readonly hasFlatlet: boolean;
    readonly hasGarden: boolean;
    readonly hasPatio: boolean;
    readonly hasPool: boolean;
    readonly id: string;
    readonly petsAllowed: boolean;
  } | null | undefined;
  readonly propertyType: RentType;
  readonly weeklyAmount: number;
  readonly " $fragmentType": "PropertyListingsCard_query";
};
export type PropertyListingsCard_query$key = {
  readonly " $data"?: PropertyListingsCard_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"PropertyListingsCard_query">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PropertyListingsCard_query",
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
  "type": "PropertyPost",
  "abstractKey": null
};
})();

(node as any).hash = "44180dfb3f3c757b9178cb0bf08bb3e9";

export default node;
