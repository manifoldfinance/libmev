import { JsonRpcResponse } from '../JsonRpc/index';

/**
 * Basic explanation of the tx state types:
 *
 * - UNCHECKED -> Tx status has not been checked and there's no information about it.
 * - PROCESSING -> Tx checks are in place until a resolution happens: OK, INDETERMINATE, ERROR.
 * - OK -> Relay received the Tx && all downstream miners accepted without complains && tx mined successfully
 * - INDETERMINATE -> Relay received correctly the Tx && at least one miner accepted the TX && TX potentially mineable
 * - ERROR -> Relay hasn't received the TX || none of the miners accepted the Tx || Tx was not mined successfully
 *
 */

export enum PrivateTxState {
  UNCHECKED = 'UNCHECKED',
  PROCESSING = 'PROCESSING',
  OK = 'OK',
  INDETERMINATE = 'INDETERMINATE',
  ERROR = 'ERROR',
}

export type RelayResponses = Record<string, RelayResponse>;

export interface RelayResponse {
  response: JsonRpcResponse<any>;
  error?: string;
}

export interface PrivateTxStatus {
  transactionHash: string;
  receivedAt: string;
  relayedAt?: string;
  minedAt?: string;
  relayFailure?: boolean;
  relayResponses?: RelayResponses;
}
