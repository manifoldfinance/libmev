[securerpc-library](../README.md) / [Exports](../modules.md) / IJsonRpcError

# Interface: IJsonRpcError

**`export`**

**`interface`** IJsonRpcError

## Table of contents

### Properties

- [error](IJsonRpcError.md#error)
- [id](IJsonRpcError.md#id)
- [jsonrpc](IJsonRpcError.md#jsonrpc)

## Properties

### error

• `Readonly` **error**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `number` |
| `data?` | `unknown` |
| `message` | `string` |

#### Defined in

[src/Interface/JsonRpc/index.ts:48](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/Interface/JsonRpc/index.ts#L48)

___

### id

• `Readonly` **id**: ``null`` \| `string` \| `number`

#### Defined in

[src/Interface/JsonRpc/index.ts:47](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/Interface/JsonRpc/index.ts#L47)

___

### jsonrpc

• `Readonly` **jsonrpc**: ``"2.0"``

#### Defined in

[src/Interface/JsonRpc/index.ts:46](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/Interface/JsonRpc/index.ts#L46)
