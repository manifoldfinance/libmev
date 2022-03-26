[securerpc-library](../README.md) / [Exports](../modules.md) / IJsonRpcRequest

# Interface: IJsonRpcRequest<TMethod, TParams\>

**`export`**

**`interface`** IJsonRpcRequest

## Type parameters

| Name | Type |
| :------ | :------ |
| `TMethod` | extends [`JsonRpcMethod`](../modules.md#jsonrpcmethod) |
| `TParams` | extends `unknown`[] |

## Table of contents

### Properties

- [id](IJsonRpcRequest.md#id)
- [jsonrpc](IJsonRpcRequest.md#jsonrpc)
- [method](IJsonRpcRequest.md#method)
- [params](IJsonRpcRequest.md#params)

## Properties

### id

• `Readonly` **id**: ``null`` \| `string` \| `number`

#### Defined in

[src/Interface/JsonRpc/index.ts:21](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/Interface/JsonRpc/index.ts#L21)

___

### jsonrpc

• `Readonly` **jsonrpc**: ``"2.0"``

#### Defined in

[src/Interface/JsonRpc/index.ts:20](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/Interface/JsonRpc/index.ts#L20)

___

### method

• `Readonly` **method**: `TMethod`

#### Defined in

[src/Interface/JsonRpc/index.ts:22](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/Interface/JsonRpc/index.ts#L22)

___

### params

• `Readonly` **params**: `TParams`

#### Defined in

[src/Interface/JsonRpc/index.ts:23](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/Interface/JsonRpc/index.ts#L23)
