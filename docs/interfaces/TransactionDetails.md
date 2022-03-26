[securerpc-library](../README.md) / [Exports](../modules.md) / TransactionDetails

# Interface: TransactionDetails

**`export`**

**`interface`** TransactionDetails

## Table of contents

### Properties

- [addedTime](TransactionDetails.md#addedtime)
- [approval](TransactionDetails.md#approval)
- [claim](TransactionDetails.md#claim)
- [confirmedTime](TransactionDetails.md#confirmedtime)
- [from](TransactionDetails.md#from)
- [hash](TransactionDetails.md#hash)
- [lastCheckedBlockNumber](TransactionDetails.md#lastcheckedblocknumber)
- [privateTx](TransactionDetails.md#privatetx)
- [receipt](TransactionDetails.md#receipt)
- [summary](TransactionDetails.md#summary)

## Properties

### addedTime

• **addedTime**: `number`

#### Defined in

[src/SecureRpc/actions.ts:68](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/actions.ts#L68)

___

### approval

• `Optional` **approval**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `tokenAddress` | `string` |

#### Defined in

[src/SecureRpc/actions.ts:63](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/actions.ts#L63)

___

### claim

• `Optional` **claim**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |

#### Defined in

[src/SecureRpc/actions.ts:65](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/actions.ts#L65)

___

### confirmedTime

• `Optional` **confirmedTime**: `number`

#### Defined in

[src/SecureRpc/actions.ts:69](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/actions.ts#L69)

___

### from

• **from**: `string`

#### Defined in

[src/SecureRpc/actions.ts:70](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/actions.ts#L70)

___

### hash

• **hash**: `string`

#### Defined in

[src/SecureRpc/actions.ts:62](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/actions.ts#L62)

___

### lastCheckedBlockNumber

• `Optional` **lastCheckedBlockNumber**: `number`

#### Defined in

[src/SecureRpc/actions.ts:67](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/actions.ts#L67)

___

### privateTx

• `Optional` **privateTx**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `state` | [`PrivateTxState`](../enums/PrivateTxState.md) |
| `status?` | [`PrivateTxStatus`](PrivateTxStatus.md) |

#### Defined in

[src/SecureRpc/actions.ts:71](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/actions.ts#L71)

___

### receipt

• `Optional` **receipt**: [`SerializableTransactionReceipt`](SerializableTransactionReceipt.md)

#### Defined in

[src/SecureRpc/actions.ts:66](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/actions.ts#L66)

___

### summary

• `Optional` **summary**: `string`

#### Defined in

[src/SecureRpc/actions.ts:64](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/actions.ts#L64)
