/**
 * @generated SignedSource<<58be9e278c5c217e644dbea1142f8ed7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UserRegistrationInput = {
  input: UserRegistrationRequestInput;
};
export type UserRegistrationRequestInput = {
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
};
export type RegisterMutation$variables = {
  input: UserRegistrationInput;
};
export type RegisterMutation$data = {
  readonly userRegistration: {
    readonly user: {
      readonly firstName: string;
      readonly lastName: string;
      readonly normalizedEmail: string | null | undefined;
    } | null | undefined;
  };
};
export type RegisterMutation = {
  response: RegisterMutation$data;
  variables: RegisterMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UserRegistrationPayload",
    "kind": "LinkedField",
    "name": "userRegistration",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "normalizedEmail",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RegisterMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RegisterMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "08c829eb87fbd45acb31af2ffbb3ddeb",
    "id": null,
    "metadata": {},
    "name": "RegisterMutation",
    "operationKind": "mutation",
    "text": "mutation RegisterMutation(\n  $input: UserRegistrationInput!\n) {\n  userRegistration(input: $input) {\n    user {\n      firstName\n      lastName\n      normalizedEmail\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4213d41fb5a7c14c15a459ef3d772abc";

export default node;
