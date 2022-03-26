[securerpc-library](../README.md) / [Exports](../modules.md) / PrivateTxState

# Enumeration: PrivateTxState

**`interface`** PrivateTxStatus

**`interface`** RelayResponse

**`description`** Transaction State Types

- UNCHECKED -> Tx status has not been checked and there's no information about it.
- PROCESSING -> Tx checks are in place until a resolution happens: OK, INDETERMINATE, ERROR.
- OK -> Relay received the Tx && all downstream miners accepted without complains && tx mined successfully
- INDETERMINATE -> Relay received correctly the Tx && at least one miner accepted the TX && TX potentially mineable
- ERROR -> Relay haven't received the TX || none of the miners accepted the Tx || Tx was not mined successfully

**`export`**

## Table of contents

### Enumeration members

- [ERROR](PrivateTxState.md#error)
- [INDETERMINATE](PrivateTxState.md#indeterminate)
- [OK](PrivateTxState.md#ok)
- [PROCESSING](PrivateTxState.md#processing)
- [UNCHECKED](PrivateTxState.md#unchecked)

## Enumeration members

### ERROR

• **ERROR** = `"ERROR"`

#### Defined in

[src/SecureRpc/OpenMevState.ts:26](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/OpenMevState.ts#L26)

___

### INDETERMINATE

• **INDETERMINATE** = `"INDETERMINATE"`

#### Defined in

[src/SecureRpc/OpenMevState.ts:25](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/OpenMevState.ts#L25)

___

### OK

• **OK** = `"OK"`

#### Defined in

[src/SecureRpc/OpenMevState.ts:24](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/OpenMevState.ts#L24)

___

### PROCESSING

• **PROCESSING** = `"PROCESSING"`

#### Defined in

[src/SecureRpc/OpenMevState.ts:23](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/OpenMevState.ts#L23)

___

### UNCHECKED

• **UNCHECKED** = `"UNCHECKED"`

#### Defined in

[src/SecureRpc/OpenMevState.ts:22](https://github.com/manifoldfinance/libsushi/blob/e8e6916/src/SecureRpc/OpenMevState.ts#L22)
