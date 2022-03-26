[securerpc-library](README.md) / Exports

# securerpc-library

## Table of contents

### Namespaces

- [PrivateTransaction](modules/PrivateTransaction.md)

### Enumerations

- [ChainId](enums/ChainId.md)
- [PrivateTxState](enums/PrivateTxState.md)

### Classes

- [HttpJsonRpcError](classes/HttpJsonRpcError.md)

### Interfaces

- [IJsonRpcError](interfaces/IJsonRpcError.md)
- [IJsonRpcRequest](interfaces/IJsonRpcRequest.md)
- [IJsonRpcSuccess](interfaces/IJsonRpcSuccess.md)
- [JsonRpcError](interfaces/JsonRpcError.md)
- [JsonRpcRequest](interfaces/JsonRpcRequest.md)
- [JsonRpcResponse](interfaces/JsonRpcResponse.md)
- [PrivateTxStatus](interfaces/PrivateTxStatus.md)
- [RelayResponse](interfaces/RelayResponse.md)
- [SerializableTransactionReceipt](interfaces/SerializableTransactionReceipt.md)
- [TransactionDetails](interfaces/TransactionDetails.md)

### Type aliases

- [IJsonRpcResponse](modules.md#ijsonrpcresponse)
- [JsonRpcMethod](modules.md#jsonrpcmethod)
- [RelayResponses](modules.md#relayresponses)

### Variables

- [addTransaction](modules.md#addtransaction)
- [checkedTransaction](modules.md#checkedtransaction)
- [clearAllTransactions](modules.md#clearalltransactions)
- [finalizeTransaction](modules.md#finalizetransaction)
- [updatePrivateTxStatus](modules.md#updateprivatetxstatus)

### Functions

- [fetchJsonRpc](modules.md#fetchjsonrpc)
- [isJsonRpcError](modules.md#isjsonrpcerror)
- [isJsonRpcSuccess](modules.md#isjsonrpcsuccess)
- [isTxExpired](modules.md#istxexpired)
- [isTxIndeterminate](modules.md#istxindeterminate)
- [isTxPending](modules.md#istxpending)
- [isTxSuccessful](modules.md#istxsuccessful)
- [privateTx](modules.md#privatetx)
- [txMinutesPending](modules.md#txminutespending)
- [validateJsonRpcResponse](modules.md#validatejsonrpcresponse)

## Type aliases

### IJsonRpcResponse

Ƭ **IJsonRpcResponse**<`T`\>: [`IJsonRpcSuccess`](interfaces/IJsonRpcSuccess.md)<`T`\> \| [`IJsonRpcError`](interfaces/IJsonRpcError.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/Interface/JsonRpc/index.ts:55](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/Interface/JsonRpc/index.ts#L55)

___

### JsonRpcMethod

Ƭ **JsonRpcMethod**: ``"eth_accounts"`` \| ``"eth_blockNumber"`` \| ``"eth_call"`` \| ``"eth_chainId"`` \| ``"eth_coinbase"`` \| ``"eth_estimateGas"`` \| ``"eth_gasPrice"`` \| ``"eth_getBalance"`` \| ``"eth_getBlockByHash"`` \| ``"eth_getBlockByNumber"`` \| ``"eth_getBlockTransactionCountByHash"`` \| ``"eth_getBlockTransactionCountByNumber"`` \| ``"eth_getCode"`` \| ``"eth_getLogs"`` \| ``"eth_getProof"`` \| ``"eth_getStorageAt"`` \| ``"eth_getTransactionByBlockHashAndIndex"`` \| ``"eth_getTransactionByBlockNumberAndIndex"`` \| ``"eth_getTransactionByHash"`` \| ``"eth_getTransactionCount"`` \| ``"eth_getTransactionReceipt"`` \| ``"eth_getUncleByBlockHashAndIndex"`` \| ``"eth_getUncleByBlockNumberAndIndex"`` \| ``"eth_getUncleCountByBlockHash"`` \| ``"eth_getUncleCountByBlockNumber"`` \| ``"eth_protocolVersion"`` \| ``"eth_sendRawTransaction"`` \| ``"eth_sendTransaction"`` \| ``"eth_sign"`` \| ``"eth_signTransaction"`` \| ``"eth_signTypedData"`` \| ``"eth_syncing"``

**`package`** InterfaceJsonRpc

**`since`** 2022.03

**`version`** 01.0

#### Defined in

[src/Interface/JsonRpc/index.ts:10](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/Interface/JsonRpc/index.ts#L10)

___

### RelayResponses

Ƭ **RelayResponses**: `Record`<`string`, [`RelayResponse`](interfaces/RelayResponse.md)\>

#### Defined in

[src/SecureRpc/OpenMevState.ts:30](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/OpenMevState.ts#L30)

## Variables

### addTransaction

• `Const` **addTransaction**: `ActionCreatorWithPayload`<{ `approval?`: { `spender`: `string` ; `tokenAddress`: `string`  } ; `chainId`: [`MAINNET`](enums/ChainId.md#mainnet) ; `claim?`: { `recipient`: `string`  } ; `from`: `string` ; `hash`: `string` ; `summary?`: `string`  }, `string`\>

#### Defined in

[src/SecureRpc/actions.ts:30](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/actions.ts#L30)

___

### checkedTransaction

• `Const` **checkedTransaction**: `ActionCreatorWithPayload`<{ `blockNumber`: `number` ; `chainId`: [`MAINNET`](enums/ChainId.md#mainnet) ; `hash`: `string`  }, `string`\>

#### Defined in

[src/SecureRpc/actions.ts:44](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/actions.ts#L44)

___

### clearAllTransactions

• `Const` **clearAllTransactions**: `ActionCreatorWithPayload`<{ `chainId`: [`MAINNET`](enums/ChainId.md#mainnet)  }, `string`\>

#### Defined in

[src/SecureRpc/actions.ts:38](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/actions.ts#L38)

___

### finalizeTransaction

• `Const` **finalizeTransaction**: `ActionCreatorWithPayload`<{ `chainId`: [`MAINNET`](enums/ChainId.md#mainnet) ; `hash`: `string` ; `receipt`: [`SerializableTransactionReceipt`](interfaces/SerializableTransactionReceipt.md)  }, `string`\>

#### Defined in

[src/SecureRpc/actions.ts:39](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/actions.ts#L39)

___

### updatePrivateTxStatus

• `Const` **updatePrivateTxStatus**: `ActionCreatorWithPayload`<{ `chainId`: [`MAINNET`](enums/ChainId.md#mainnet) ; `hash`: `string` ; `status`: [`PrivateTxStatus`](interfaces/PrivateTxStatus.md)  }, `string`\>

#### Defined in

[src/SecureRpc/actions.ts:49](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/actions.ts#L49)

## Functions

### fetchJsonRpc

▸ **fetchJsonRpc**<`T`\>(`url`, `{`): `Promise`<[`JsonRpcResponse`](interfaces/JsonRpcResponse.md)<[`JsonRpcError`](interfaces/JsonRpcError.md) \| `T`\>\>

**`export`**

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` |  |
| `{` | `Partial`<[`JsonRpcRequest`](interfaces/JsonRpcRequest.md)\> | jsonrpc = '2.0',     id = new Date().getTime(),     method = '',     params = [],   } |

#### Returns

`Promise`<[`JsonRpcResponse`](interfaces/JsonRpcResponse.md)<[`JsonRpcError`](interfaces/JsonRpcError.md) \| `T`\>\>

#### Defined in

[src/JsonRpc/index.ts:71](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/JsonRpc/index.ts#L71)

___

### isJsonRpcError

▸ **isJsonRpcError**<`T`\>(`response`): response is IJsonRpcError

**`export`**

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`IJsonRpcResponse`](modules.md#ijsonrpcresponse)<`T`\> |

#### Returns

response is IJsonRpcError

#### Defined in

[src/Interface/JsonRpc/index.ts:90](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/Interface/JsonRpc/index.ts#L90)

___

### isJsonRpcSuccess

▸ **isJsonRpcSuccess**<`T`\>(`response`): response is IJsonRpcSuccess<T\>

**`export`**

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`IJsonRpcResponse`](modules.md#ijsonrpcresponse)<`T`\> |

#### Returns

response is IJsonRpcSuccess<T\>

#### Defined in

[src/Interface/JsonRpc/index.ts:77](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/Interface/JsonRpc/index.ts#L77)

___

### isTxExpired

▸ **isTxExpired**(`tx?`): `boolean`

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx?` | `TransactionDetails` |

#### Returns

`boolean`

#### Defined in

[src/SecureRpc/privateTransaction.ts:79](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/privateTransaction.ts#L79)

___

### isTxIndeterminate

▸ **isTxIndeterminate**(`tx?`): `boolean`

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx?` | `TransactionDetails` |

#### Returns

`boolean`

#### Defined in

[src/SecureRpc/privateTransaction.ts:56](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/privateTransaction.ts#L56)

___

### isTxPending

▸ **isTxPending**(`tx?`): `boolean`

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx?` | `TransactionDetails` |

#### Returns

`boolean`

#### Defined in

[src/SecureRpc/privateTransaction.ts:30](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/privateTransaction.ts#L30)

___

### isTxSuccessful

▸ **isTxSuccessful**(`tx?`): `boolean`

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx?` | `TransactionDetails` |

#### Returns

`boolean`

#### Defined in

[src/SecureRpc/privateTransaction.ts:41](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/privateTransaction.ts#L41)

___

### privateTx

▸ **privateTx**(`privateTx`): `any`

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateTx` | `any` |

#### Returns

`any`

#### Defined in

[src/SecureRpc/OpenMevState.ts:62](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/OpenMevState.ts#L62)

___

### txMinutesPending

▸ **txMinutesPending**(`tx?`): `number`

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx?` | `TransactionDetails` |

#### Returns

`number`

#### Defined in

[src/SecureRpc/privateTransaction.ts:67](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/privateTransaction.ts#L67)

___

### validateJsonRpcResponse

▸ **validateJsonRpcResponse**<`T`\>(`response`): response is IJsonRpcResponse<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `any` |

#### Returns

response is IJsonRpcResponse<T\>

#### Defined in

[src/Interface/JsonRpc/index.ts:56](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/Interface/JsonRpc/index.ts#L56)
