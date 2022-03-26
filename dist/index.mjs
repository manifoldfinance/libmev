import { createAction, createReducer } from '@reduxjs/toolkit';

class HttpJsonRpcError extends Error {
  req;
  res;
  constructor(message, req, res) {
    super(message);
    this.req = req;
    this.res = res;
  }
}
function fetchJsonRpc(url, { jsonrpc = "2.0", id = new Date().getTime(), method = "", params = [] }) {
  return fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ jsonrpc, id, method, params })
  }).then((res) => {
    if (res.status !== 200)
      throw new HttpJsonRpcError(res.statusText, { jsonrpc, id, method, params }, res);
    return res.json();
  });
}

var index$4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    HttpJsonRpcError: HttpJsonRpcError,
    fetchJsonRpc: fetchJsonRpc
});

var ChainId;
(function(ChainId2) {
  ChainId2["MAINNET"] = "1";
})(ChainId || (ChainId = {}));

var ChainId$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get ChainId () { return ChainId; }
});

const addTransaction = createAction("transactions/addTransaction");
const clearAllTransactions = createAction("transactions/clearAllTransactions");
const finalizeTransaction = createAction("transactions/finalizeTransaction");
const checkedTransaction = createAction("transactions/checkedTransaction");
const updatePrivateTxStatus = createAction("transactions/updatePrivateTxStatus");

var actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    addTransaction: addTransaction,
    clearAllTransactions: clearAllTransactions,
    finalizeTransaction: finalizeTransaction,
    checkedTransaction: checkedTransaction,
    updatePrivateTxStatus: updatePrivateTxStatus
});

var PrivateTxState$1;
(function(PrivateTxState2) {
  PrivateTxState2["UNCHECKED"] = "UNCHECKED";
  PrivateTxState2["PROCESSING"] = "PROCESSING";
  PrivateTxState2["OK"] = "OK";
  PrivateTxState2["INDETERMINATE"] = "INDETERMINATE";
  PrivateTxState2["ERROR"] = "ERROR";
})(PrivateTxState$1 || (PrivateTxState$1 = {}));
function privateTx(privateTx2) {
  throw new Error("[#sushiguard]: Function Error.");
}

var OpenMevState = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get PrivateTxState () { return PrivateTxState$1; },
    privateTx: privateTx
});

function isTxPending(tx) {
  if (!tx?.privateTx)
    return !tx?.receipt;
  return tx?.privateTx?.state === PrivateTxState$1.UNCHECKED || tx?.privateTx?.state === PrivateTxState$1.PROCESSING;
}
function isTxSuccessful(tx) {
  if (!tx?.privateTx)
    return !!tx && (tx.receipt?.status === 1 || typeof tx.receipt?.status === "undefined");
  return tx?.privateTx?.state === PrivateTxState$1.OK && !!tx && (tx.receipt?.status === 1 || typeof tx.receipt?.status === "undefined");
}
function isTxIndeterminate(tx) {
  if (!tx?.privateTx)
    return false;
  return tx?.privateTx?.state === PrivateTxState$1.INDETERMINATE;
}
function txMinutesPending(tx) {
  if (!tx)
    return 0;
  return (new Date().getTime() - tx.addedTime) / 1e3 / 60;
}
function isTxExpired(tx) {
  if (!tx)
    return false;
  return txMinutesPending(tx) > 60;
}

var privateTransaction = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isTxPending: isTxPending,
    isTxSuccessful: isTxSuccessful,
    isTxIndeterminate: isTxIndeterminate,
    txMinutesPending: txMinutesPending,
    isTxExpired: isTxExpired
});

var transaction = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PrivateTransaction: privateTransaction,
    isTxIndeterminate: isTxIndeterminate,
    isTxPending: isTxPending,
    isTxSuccessful: isTxSuccessful,
    txMinutesPending: txMinutesPending
});

const now = () => new Date().getTime();
const initialState = {};
var reducer = createReducer(initialState, (builder) => builder.addCase(addTransaction, (transactions, { payload: { chainId, from, hash, approval, summary, claim, privateTx = false } }) => {
  if (transactions[chainId]?.[hash]) {
    throw Error("Attempted to add existing transaction.");
  }
  const txs = transactions[chainId] ?? {};
  txs[hash] = {
    hash,
    approval,
    summary,
    claim,
    from,
    addedTime: now(),
    ...privateTx ? { privateTx: { state: PrivateTxState$1.UNCHECKED, status: void 0 } } : {}
  };
  transactions[chainId] = txs;
}).addCase(clearAllTransactions, (transactions, { payload: { chainId } }) => {
  if (!transactions[chainId])
    return;
  transactions[chainId] = {};
}).addCase(checkedTransaction, (transactions, { payload: { chainId, hash, blockNumber } }) => {
  const tx = transactions[chainId]?.[hash];
  if (!tx) {
    return;
  }
  if (!tx.lastCheckedBlockNumber) {
    tx.lastCheckedBlockNumber = blockNumber;
  } else {
    tx.lastCheckedBlockNumber = Math.max(blockNumber, tx.lastCheckedBlockNumber);
  }
}).addCase(finalizeTransaction, (transactions, { payload: { hash, chainId, receipt } }) => {
  const tx = transactions[chainId]?.[hash];
  if (!tx) {
    return;
  }
  tx.receipt = receipt;
  tx.confirmedTime = now();
}).addCase(updatePrivateTxStatus, (transactions, { payload: { chainId, hash, status } }) => {
  const tx = transactions[chainId]?.[hash];
  if (!tx)
    return;
  if (!tx.privateTx)
    throw new Error("Invalid update private tx call to a non private tx");
  const prevState = tx.privateTx?.state;
  tx.privateTx?.status;
  const minutesElapsed = txMinutesPending(tx);
  if (prevState && (prevState === PrivateTxState$1.ERROR || prevState === PrivateTxState$1.INDETERMINATE || prevState === PrivateTxState$1.OK))
    return;
  let state = PrivateTxState$1.PROCESSING;
  if (status.receivedAt && status.relayedAt && !status.relayFailure && status.minedAt)
    state = PrivateTxState$1.OK;
  if (status.receivedAt && status.relayFailure && status.relayResponses && Object.values(status.relayResponses).reduceRight((prev, current) => {
    if (prev)
      return prev;
    if (current.error || current.response.error)
      return true;
    return false;
  }, false))
    state = PrivateTxState$1.ERROR;
  if (status.receivedAt && status.relayedAt && status.relayFailure && status.minedAt)
    state = PrivateTxState$1.INDETERMINATE;
  if (minutesElapsed > 3)
    state = PrivateTxState$1.INDETERMINATE;
  tx.privateTx.state = state ?? PrivateTxState$1.UNCHECKED;
  tx.privateTx.status = status;
}));

var reducer$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    initialState: initialState,
    'default': reducer
});

var index$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ChainId: ChainId$1,
    OpenMevState: OpenMevState,
    Actions: actions,
    PrivateTransaction: privateTransaction,
    Reducer: reducer$1,
    Transaction: transaction,
    addTransaction: addTransaction,
    checkedTransaction: checkedTransaction,
    clearAllTransactions: clearAllTransactions,
    finalizeTransaction: finalizeTransaction,
    updatePrivateTxStatus: updatePrivateTxStatus
});

var PrivateTxState;
(function(PrivateTxState2) {
  PrivateTxState2["UNCHECKED"] = "UNCHECKED";
  PrivateTxState2["PROCESSING"] = "PROCESSING";
  PrivateTxState2["OK"] = "OK";
  PrivateTxState2["INDETERMINATE"] = "INDETERMINATE";
  PrivateTxState2["ERROR"] = "ERROR";
})(PrivateTxState || (PrivateTxState = {}));

var index$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get PrivateTxState () { return PrivateTxState; }
});

const AddressZero = "0x0000000000000000000000000000000000000000";

var AddressZero$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AddressZero: AddressZero
});

const timeout = (promise, time, rejectReason) => {
  if (!Number.isFinite(time))
    return (async () => promise)();
  let timer;
  const race = Promise.race([
    promise,
    new Promise((r, reject) => {
      timer = setTimeout(() => reject(new Error(rejectReason ?? "timeout")), time);
    })
  ]);
  race.finally(() => clearTimeout(timer));
  return race;
};

var timeout$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    timeout: timeout
});

class ValueRef {
  _value;
  get value() {
    return this._value;
  }
  set value(newVal) {
    const oldVal = this._value;
    if (this.isEqual(newVal, oldVal))
      return;
    this._value = newVal;
    for (const fn of this.watcher) {
      try {
        fn(newVal, oldVal);
      } catch (e) {
        console.error(e);
      }
    }
  }
  watcher = /* @__PURE__ */ new Set();
  isEqual;
  constructor(_value, isEqual = (a, b) => a === b) {
    this._value = _value;
    this.isEqual = isEqual;
  }
  addListener(fn) {
    this.watcher.add(fn);
    return () => this.removeListener(fn);
  }
  removeListener(fn) {
    this.watcher.delete(fn);
  }
  removeAllListener() {
    this.watcher = /* @__PURE__ */ new Set();
  }
}

var value = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ValueRef: ValueRef
});

var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Timeout: timeout$1,
    Value: value
});

class Result {
  static from(value) {
    return new Result(value);
  }
  val;
  constructor(value) {
    this.val = value;
  }
  and(func) {
    if (this.isOk(this.val)) {
      const nextAssertable = func(this.val.res);
      const nextVal = nextAssertable.toVal();
      if (nextAssertable.isOk(nextVal)) {
        return Result.from({ res: nextVal.res });
      } else {
        return Result.from({
          err: nextVal.err
        });
      }
    } else {
      return Result.from({ err: this.val.err });
    }
  }
  unwrap() {
    if (this.isOk(this.val)) {
      return this.val.res;
    }
    throw Error(this.val.err);
  }
  expect(msg) {
    if (this.isOk(this.val)) {
      return this.val.res;
    }
    throw Error(msg);
  }
  ok() {
    return !this.val.err;
  }
  err() {
    return this.val.err;
  }
  toVal() {
    return this.val;
  }
  isOk(val) {
    return !val.err;
  }
}

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Result: Result
});

function validateJsonRpcResponse(response) {
  if (response.jsonrpc !== "2.0" || typeof response.id !== "string" && typeof response.id !== "number" && response.id !== null || "result" in response && "error" in response || !("result" in response) && !("error" in response) || response.error && typeof response.error.code !== "number" || response.error && typeof response.error.message !== "string")
    throw new Error(`Expected JSON-RPC response, received something else.
${JSON.stringify(response)}`);
  return true;
}
function isJsonRpcSuccess(response) {
  return !!response.result && !response.error;
}
function isJsonRpcError(response) {
  return !!response.error && !response.result;
}

export { AddressZero$1 as AddressZero, ChainId, index$1 as Fn, HttpJsonRpcError, index$4 as JsonRpc, privateTransaction as PrivateTransaction, PrivateTxState$1 as PrivateTxState, index as Result, index$3 as SecureRpc, index$2 as SushiGuard, timeout$1 as Timeout, value as Value, ValueRef, addTransaction, checkedTransaction, clearAllTransactions, fetchJsonRpc, finalizeTransaction, isJsonRpcError, isJsonRpcSuccess, isTxExpired, isTxIndeterminate, isTxPending, isTxSuccessful, privateTx, txMinutesPending, updatePrivateTxStatus, validateJsonRpcResponse };
//# sourceMappingURL=index.mjs.map
