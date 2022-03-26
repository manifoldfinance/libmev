[securerpc-library](../README.md) / [Exports](../modules.md) / JsonRpcResponse

# Interface: JsonRpcResponse<T\>

**`export`**

**`interface`** JsonRpcResponse

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [error](JsonRpcResponse.md#error)
- [id](JsonRpcResponse.md#id)
- [jsonrpc](JsonRpcResponse.md#jsonrpc)
- [result](JsonRpcResponse.md#result)

## Properties

### error

• `Optional` **error**: [`JsonRpcError`](JsonRpcError.md)

#### Defined in

[src/JsonRpc/index.ts:43](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/JsonRpc/index.ts#L43)

___

### id

• `Optional` **id**: ``null`` \| `string` \| `number`

#### Defined in

[src/JsonRpc/index.ts:41](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/JsonRpc/index.ts#L41)

___

### jsonrpc

• **jsonrpc**: ``"2.0"``

#### Defined in

[src/JsonRpc/index.ts:40](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/JsonRpc/index.ts#L40)

___

### result

• `Optional` **result**: `T`

#### Defined in

[src/JsonRpc/index.ts:42](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/JsonRpc/index.ts#L42)
