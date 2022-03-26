[securerpc-library](../README.md) / [Exports](../modules.md) / HttpJsonRpcError

# Class: HttpJsonRpcError

**`export`**

## Hierarchy

- `Error`

  ↳ **`HttpJsonRpcError`**

## Table of contents

### Constructors

- [constructor](HttpJsonRpcError.md#constructor)

### Properties

- [cause](HttpJsonRpcError.md#cause)
- [message](HttpJsonRpcError.md#message)
- [name](HttpJsonRpcError.md#name)
- [req](HttpJsonRpcError.md#req)
- [res](HttpJsonRpcError.md#res)
- [stack](HttpJsonRpcError.md#stack)
- [prepareStackTrace](HttpJsonRpcError.md#preparestacktrace)
- [stackTraceLimit](HttpJsonRpcError.md#stacktracelimit)

### Methods

- [captureStackTrace](HttpJsonRpcError.md#capturestacktrace)

## Constructors

### constructor

• **new HttpJsonRpcError**(`message`, `req?`, `res?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `req?` | [`JsonRpcRequest`](../interfaces/JsonRpcRequest.md) |
| `res?` | `Response` |

#### Overrides

Error.constructor

#### Defined in

[src/JsonRpc/index.ts:53](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/JsonRpc/index.ts#L53)

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1022

___

### req

• `Optional` **req**: [`JsonRpcRequest`](../interfaces/JsonRpcRequest.md)

___

### res

• `Optional` **res**: `Response`

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
