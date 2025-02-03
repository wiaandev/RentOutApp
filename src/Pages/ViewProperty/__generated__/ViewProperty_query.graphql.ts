/**
 * @generated SignedSource<<a4151b99ae1759fc5953d8d5771bdc01>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type RentType = "APARTMENT" | "DUPLEX" | "FLAT" | "HOUSE" | "PLOT" | "TOWNHOUSE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ViewProperty_query$data = {
  readonly bathroomAmount: number;
  readonly bedroomAmount: number;
  readonly createdAt: any;
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
  readonly " $fragmentType": "ViewProperty_query";
};
export type ViewProperty_query$key = {
  readonly " $data"?: ViewProperty_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewProperty_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewProperty_query",
  "selections": [
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
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

(node as any).hash = "9b114bc3201318cdfa027cfff2dc4a11";

export default node;
