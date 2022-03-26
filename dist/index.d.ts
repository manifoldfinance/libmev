import * as _reduxjs_toolkit from '@reduxjs/toolkit';
import * as _reduxjs_toolkit_dist_createReducer from '@reduxjs/toolkit/dist/createReducer';

interface JsonRpcRequest {
    jsonrpc: '2.0';
    id: number | string | null;
    method: string;
    params?: unknown[] | unknown;
}
interface JsonRpcError {
    code: number;
    message: string;
    data?: unknown;
}
interface JsonRpcResponse<T> {
    jsonrpc: '2.0';
    id?: number | string | null;
    result?: T;
    error?: JsonRpcError;
}
declare class HttpJsonRpcError extends Error {
    req?: JsonRpcRequest | undefined;
    res?: Response | undefined;
    constructor(message: string, req?: JsonRpcRequest | undefined, res?: Response | undefined);
}
declare function fetchJsonRpc<T>(url: string, { jsonrpc, id, method, params }: Partial<JsonRpcRequest>): Promise<JsonRpcResponse<JsonRpcError | T>>;

type index$4_JsonRpcRequest = JsonRpcRequest;
type index$4_JsonRpcError = JsonRpcError;
type index$4_JsonRpcResponse<T> = JsonRpcResponse<T>;
type index$4_HttpJsonRpcError = HttpJsonRpcError;
declare const index$4_HttpJsonRpcError: typeof HttpJsonRpcError;
declare const index$4_fetchJsonRpc: typeof fetchJsonRpc;
declare namespace index$4 {
  export {
    index$4_JsonRpcRequest as JsonRpcRequest,
    index$4_JsonRpcError as JsonRpcError,
    index$4_JsonRpcResponse as JsonRpcResponse,
    index$4_HttpJsonRpcError as HttpJsonRpcError,
    index$4_fetchJsonRpc as fetchJsonRpc,
  };
}

declare enum ChainId {
    MAINNET = "1"
}

type ChainId$1_ChainId = ChainId;
declare const ChainId$1_ChainId: typeof ChainId;
declare namespace ChainId$1 {
  export {
    ChainId$1_ChainId as ChainId,
  };
}

declare enum PrivateTxState$1 {
    UNCHECKED = "UNCHECKED",
    PROCESSING = "PROCESSING",
    OK = "OK",
    INDETERMINATE = "INDETERMINATE",
    ERROR = "ERROR"
}
declare type RelayResponses$1 = Record<string, RelayResponse$1>;
interface RelayResponse$1 {
    response: JsonRpcResponse<any>;
    error?: string;
}
interface PrivateTxStatus$1 {
    transactionHash: string;
    receivedAt: string;
    relayedAt?: string;
    minedAt?: string;
    relayFailure?: boolean;
    relayResponses?: RelayResponses$1;
}
declare function privateTx(privateTx: any): any;

declare const OpenMevState_privateTx: typeof privateTx;
declare namespace OpenMevState {
  export {
    PrivateTxState$1 as PrivateTxState,
    RelayResponses$1 as RelayResponses,
    RelayResponse$1 as RelayResponse,
    PrivateTxStatus$1 as PrivateTxStatus,
    OpenMevState_privateTx as privateTx,
  };
}

interface SerializableTransactionReceipt {
    to: string;
    from: string;
    contractAddress: string;
    transactionIndex: number;
    blockHash: string;
    transactionHash: string;
    blockNumber: number;
    status?: number;
}
declare const addTransaction: _reduxjs_toolkit.ActionCreatorWithPayload<{
    chainId: ChainId;
    hash: string;
    from: string;
    approval?: {
        tokenAddress: string;
        spender: string;
    } | undefined;
    claim?: {
        recipient: string;
    } | undefined;
    summary?: string | undefined;
}, string>;
declare const clearAllTransactions: _reduxjs_toolkit.ActionCreatorWithPayload<{
    chainId: ChainId;
}, string>;
declare const finalizeTransaction: _reduxjs_toolkit.ActionCreatorWithPayload<{
    chainId: ChainId;
    hash: string;
    receipt: SerializableTransactionReceipt;
}, string>;
declare const checkedTransaction: _reduxjs_toolkit.ActionCreatorWithPayload<{
    chainId: ChainId;
    hash: string;
    blockNumber: number;
}, string>;
declare const updatePrivateTxStatus: _reduxjs_toolkit.ActionCreatorWithPayload<{
    chainId: ChainId;
    hash: string;
    status: PrivateTxStatus$1;
}, string>;
interface TransactionDetails$1 {
    hash: string;
    approval?: {
        tokenAddress: string;
        spender: string;
    };
    summary?: string;
    claim?: {
        recipient: string;
    };
    receipt?: SerializableTransactionReceipt;
    lastCheckedBlockNumber?: number;
    addedTime: number;
    confirmedTime?: number;
    from: string;
    privateTx?: {
        state: PrivateTxState$1;
        status?: PrivateTxStatus$1;
    };
}

type actions_SerializableTransactionReceipt = SerializableTransactionReceipt;
declare const actions_addTransaction: typeof addTransaction;
declare const actions_clearAllTransactions: typeof clearAllTransactions;
declare const actions_finalizeTransaction: typeof finalizeTransaction;
declare const actions_checkedTransaction: typeof checkedTransaction;
declare const actions_updatePrivateTxStatus: typeof updatePrivateTxStatus;
declare namespace actions {
  export {
    actions_SerializableTransactionReceipt as SerializableTransactionReceipt,
    actions_addTransaction as addTransaction,
    actions_clearAllTransactions as clearAllTransactions,
    actions_finalizeTransaction as finalizeTransaction,
    actions_checkedTransaction as checkedTransaction,
    actions_updatePrivateTxStatus as updatePrivateTxStatus,
    TransactionDetails$1 as TransactionDetails,
  };
}

interface TransactionDetails {
    hash: string;
    approval?: {
        tokenAddress: string;
        spender: string;
    };
    summary?: string;
    claim?: {
        recipient: string;
    };
    receipt?: SerializableTransactionReceipt;
    lastCheckedBlockNumber?: number;
    addedTime: number;
    confirmedTime?: number;
    from: string;
    privateTx?: {
        state: PrivateTxState$1;
        status?: PrivateTxStatus$1;
    };
}
declare type txHash = string;
declare type TransactionState = {
    [key in ChainId]?: Record<txHash, TransactionDetails>;
};
declare const initialState: TransactionState;
declare const _default: _reduxjs_toolkit_dist_createReducer.ReducerWithInitialState<TransactionState>;

type reducer_TransactionDetails = TransactionDetails;
type reducer_TransactionState = TransactionState;
declare const reducer_initialState: typeof initialState;
declare namespace reducer {
  export {
    _default as default,
    reducer_TransactionDetails as TransactionDetails,
    reducer_TransactionState as TransactionState,
    reducer_initialState as initialState,
  };
}

declare function isTxPending(tx?: TransactionDetails): boolean;
declare function isTxSuccessful(tx?: TransactionDetails): boolean;
declare function isTxIndeterminate(tx?: TransactionDetails): boolean;
declare function txMinutesPending(tx?: TransactionDetails): number;
declare function isTxExpired(tx?: TransactionDetails): boolean;

declare const privateTransaction_isTxPending: typeof isTxPending;
declare const privateTransaction_isTxSuccessful: typeof isTxSuccessful;
declare const privateTransaction_isTxIndeterminate: typeof isTxIndeterminate;
declare const privateTransaction_txMinutesPending: typeof txMinutesPending;
declare const privateTransaction_isTxExpired: typeof isTxExpired;
declare namespace privateTransaction {
  export {
    privateTransaction_isTxPending as isTxPending,
    privateTransaction_isTxSuccessful as isTxSuccessful,
    privateTransaction_isTxIndeterminate as isTxIndeterminate,
    privateTransaction_txMinutesPending as txMinutesPending,
    privateTransaction_isTxExpired as isTxExpired,
  };
}

declare const transaction_isTxIndeterminate: typeof isTxIndeterminate;
declare const transaction_isTxPending: typeof isTxPending;
declare const transaction_isTxSuccessful: typeof isTxSuccessful;
declare const transaction_txMinutesPending: typeof txMinutesPending;
declare namespace transaction {
  export {
    privateTransaction as PrivateTransaction,
    transaction_isTxIndeterminate as isTxIndeterminate,
    transaction_isTxPending as isTxPending,
    transaction_isTxSuccessful as isTxSuccessful,
    transaction_txMinutesPending as txMinutesPending,
  };
}

declare const index$3_OpenMevState: typeof OpenMevState;
declare const index$3_addTransaction: typeof addTransaction;
declare const index$3_checkedTransaction: typeof checkedTransaction;
declare const index$3_clearAllTransactions: typeof clearAllTransactions;
declare const index$3_finalizeTransaction: typeof finalizeTransaction;
type index$3_SerializableTransactionReceipt = SerializableTransactionReceipt;
declare const index$3_updatePrivateTxStatus: typeof updatePrivateTxStatus;
declare namespace index$3 {
  export {
    ChainId$1 as ChainId,
    index$3_OpenMevState as OpenMevState,
    actions as Actions,
    privateTransaction as PrivateTransaction,
    reducer as Reducer,
    transaction as Transaction,
    index$3_addTransaction as addTransaction,
    index$3_checkedTransaction as checkedTransaction,
    index$3_clearAllTransactions as clearAllTransactions,
    index$3_finalizeTransaction as finalizeTransaction,
    index$3_SerializableTransactionReceipt as SerializableTransactionReceipt,
    index$3_updatePrivateTxStatus as updatePrivateTxStatus,
  };
}

declare enum PrivateTxState {
    UNCHECKED = "UNCHECKED",
    PROCESSING = "PROCESSING",
    OK = "OK",
    INDETERMINATE = "INDETERMINATE",
    ERROR = "ERROR"
}
declare type RelayResponses = Record<string, RelayResponse>;
interface RelayResponse {
    response: JsonRpcResponse<any>;
    error?: string;
}
interface PrivateTxStatus {
    transactionHash: string;
    receivedAt: string;
    relayedAt?: string;
    minedAt?: string;
    relayFailure?: boolean;
    relayResponses?: RelayResponses;
}

type index$2_PrivateTxState = PrivateTxState;
declare const index$2_PrivateTxState: typeof PrivateTxState;
type index$2_RelayResponses = RelayResponses;
type index$2_RelayResponse = RelayResponse;
type index$2_PrivateTxStatus = PrivateTxStatus;
declare namespace index$2 {
  export {
    index$2_PrivateTxState as PrivateTxState,
    index$2_RelayResponses as RelayResponses,
    index$2_RelayResponse as RelayResponse,
    index$2_PrivateTxStatus as PrivateTxStatus,
  };
}

declare const AddressZero = "0x0000000000000000000000000000000000000000";

declare const AddressZero$1_AddressZero: typeof AddressZero;
declare namespace AddressZero$1 {
  export {
    AddressZero$1_AddressZero as AddressZero,
  };
}

declare const timeout: <T>(promise: PromiseLike<T>, time: number, rejectReason?: string | undefined) => Promise<T>;

declare const timeout$1_timeout: typeof timeout;
declare namespace timeout$1 {
  export {
    timeout$1_timeout as timeout,
  };
}

declare class ValueRef<T> {
    private _value;
    get value(): T;
    set value(newVal: T);
    private watcher;
    isEqual: (a: unknown, b: unknown) => boolean;
    constructor(_value: T, isEqual?: (a: T, b: T) => boolean);
    addListener(fn: (newVal: T, oldVal: T) => void): () => void;
    removeListener(fn: (newVal: T, oldVal: T) => void): void;
    removeAllListener(): void;
}

type value_ValueRef<T> = ValueRef<T>;
declare const value_ValueRef: typeof ValueRef;
declare namespace value {
  export {
    value_ValueRef as ValueRef,
  };
}

declare namespace index$1 {
  export {
    timeout$1 as Timeout,
    value as Value,
  };
}

interface IResultOk<T> {
    res: T;
    err?: undefined;
}
interface IResultErr {
    res?: undefined;
    err: string;
}
declare type TResult<T> = IResultOk<T> | IResultErr;
declare class Result<T> {
    static from<T>(value: TResult<T>): Result<T>;
    private readonly val;
    constructor(value: TResult<T>);
    and<U>(func: (arg: T) => Result<U>): Result<U>;
    unwrap(): T;
    expect(msg: string): T;
    ok(): boolean;
    err(): string | undefined;
    toVal(): TResult<T>;
    private isOk;
}

type index_IResultOk<T> = IResultOk<T>;
type index_IResultErr = IResultErr;
type index_TResult<T> = TResult<T>;
type index_Result<T> = Result<T>;
declare const index_Result: typeof Result;
declare namespace index {
  export {
    index_IResultOk as IResultOk,
    index_IResultErr as IResultErr,
    index_TResult as TResult,
    index_Result as Result,
  };
}

declare type JsonRpcMethod = 'eth_accounts' | 'eth_blockNumber' | 'eth_call' | 'eth_chainId' | 'eth_coinbase' | 'eth_estimateGas' | 'eth_gasPrice' | 'eth_getBalance' | 'eth_getBlockByHash' | 'eth_getBlockByNumber' | 'eth_getBlockTransactionCountByHash' | 'eth_getBlockTransactionCountByNumber' | 'eth_getCode' | 'eth_getLogs' | 'eth_getProof' | 'eth_getStorageAt' | 'eth_getTransactionByBlockHashAndIndex' | 'eth_getTransactionByBlockNumberAndIndex' | 'eth_getTransactionByHash' | 'eth_getTransactionCount' | 'eth_getTransactionReceipt' | 'eth_getUncleByBlockHashAndIndex' | 'eth_getUncleByBlockNumberAndIndex' | 'eth_getUncleCountByBlockHash' | 'eth_getUncleCountByBlockNumber' | 'eth_protocolVersion' | 'eth_sendRawTransaction' | 'eth_sendTransaction' | 'eth_sign' | 'eth_signTransaction' | 'eth_signTypedData' | 'eth_syncing';
interface IJsonRpcRequest<TMethod extends JsonRpcMethod, TParams extends Array<unknown>> {
    readonly jsonrpc: '2.0';
    readonly id: string | number | null;
    readonly method: TMethod;
    readonly params: TParams;
}
interface IJsonRpcSuccess<TResult> {
    readonly jsonrpc: '2.0';
    readonly id: string | number | null;
    readonly result: TResult;
}
interface IJsonRpcError {
    readonly jsonrpc: '2.0';
    readonly id: string | number | null;
    readonly error: {
        readonly code: number;
        readonly message: string;
        readonly data?: unknown;
    };
}
declare type IJsonRpcResponse<T> = IJsonRpcSuccess<T> | IJsonRpcError;
declare function validateJsonRpcResponse<T>(response: any): response is IJsonRpcResponse<T>;
declare function isJsonRpcSuccess<T>(response: IJsonRpcResponse<T>): response is IJsonRpcSuccess<T>;
declare function isJsonRpcError<T>(response: IJsonRpcResponse<T>): response is IJsonRpcError;

export { AddressZero$1 as AddressZero, ChainId, index$1 as Fn, HttpJsonRpcError, IJsonRpcError, IJsonRpcRequest, IJsonRpcResponse, IJsonRpcSuccess, IResultErr, IResultOk, index$4 as JsonRpc, JsonRpcError, JsonRpcMethod, JsonRpcRequest, JsonRpcResponse, privateTransaction as PrivateTransaction, PrivateTxState$1 as PrivateTxState, PrivateTxStatus$1 as PrivateTxStatus, RelayResponse$1 as RelayResponse, RelayResponses$1 as RelayResponses, index as Result, index$3 as SecureRpc, SerializableTransactionReceipt, index$2 as SushiGuard, TResult, timeout$1 as Timeout, TransactionDetails$1 as TransactionDetails, value as Value, ValueRef, addTransaction, checkedTransaction, clearAllTransactions, fetchJsonRpc, finalizeTransaction, isJsonRpcError, isJsonRpcSuccess, isTxExpired, isTxIndeterminate, isTxPending, isTxSuccessful, privateTx, txMinutesPending, updatePrivateTxStatus, validateJsonRpcResponse };
