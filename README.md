# [libmev](#)

## Motivation


## Library

### PrivateTxState

**`interface`** PrivateTxStatus

**`interface`** RelayResponse

**`description`** Transaction State Types

- UNCHECKED -> Tx status has not been checked and there's no information about it.
- PROCESSING -> Tx checks are in place until a resolution happens: OK, INDETERMINATE, ERROR.
- OK -> Relay received the Tx && all downstream miners accepted without complains && tx mined successfully
- INDETERMINATE -> Relay received correctly the Tx && at least one miner accepted the TX && TX potentially mineable
- ERROR -> Relay haven't received the TX || none of the miners accepted the Tx || Tx was not mined successfully

**`export`**
#### Enumeration members

- [ERROR](PrivateTxState.md#error)
- [INDETERMINATE](PrivateTxState.md#indeterminate)
- [OK](PrivateTxState.md#ok)
- [PROCESSING](PrivateTxState.md#processing)
- [UNCHECKED](PrivateTxState.md#unchecked)



## Usage


```typescript
import { PrivateTxState } from 'libmev';
```


## Development

```shell
git clone https://github.com/manifoldfinance/libmev && cd libmev && npm install 
```

## License


   Copyright 2022 CommodityStream LLC

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.