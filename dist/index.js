'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var toolkit = require('@reduxjs/toolkit');

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

exports.ChainId = void 0;
(function(ChainId2) {
  ChainId2["MAINNET"] = "1";
})(exports.ChainId || (exports.ChainId = {}));

var ChainId = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get ChainId () { return exports.ChainId; }
});

const addTransaction = toolkit.createAction("transactions/addTransaction");
const clearAllTransactions = toolkit.createAction("transactions/clearAllTransactions");
const finalizeTransaction = toolkit.createAction("transactions/finalizeTransaction");
const checkedTransaction = toolkit.createAction("transactions/checkedTransaction");
const updatePrivateTxStatus = toolkit.createAction("transactions/updatePrivateTxStatus");

var actions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    addTransaction: addTransaction,
    clearAllTransactions: clearAllTransactions,
    finalizeTransaction: finalizeTransaction,
    checkedTransaction: checkedTransaction,
    updatePrivateTxStatus: updatePrivateTxStatus
});

exports.PrivateTxState = void 0;
(function(PrivateTxState2) {
  PrivateTxState2["UNCHECKED"] = "UNCHECKED";
  PrivateTxState2["PROCESSING"] = "PROCESSING";
  PrivateTxState2["OK"] = "OK";
  PrivateTxState2["INDETERMINATE"] = "INDETERMINATE";
  PrivateTxState2["ERROR"] = "ERROR";
})(exports.PrivateTxState || (exports.PrivateTxState = {}));
function privateTx(privateTx2) {
  throw new Error("[#sushiguard]: Function Error.");
}

var OpenMevState = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get PrivateTxState () { return exports.PrivateTxState; },
    privateTx: privateTx
});

function isTxPending(tx) {
  if (!tx?.privateTx)
    return !tx?.receipt;
  return tx?.privateTx?.state === exports.PrivateTxState.UNCHECKED || tx?.privateTx?.state === exports.PrivateTxState.PROCESSING;
}
function isTxSuccessful(tx) {
  if (!tx?.privateTx)
    return !!tx && (tx.receipt?.status === 1 || typeof tx.receipt?.status === "undefined");
  return tx?.privateTx?.state === exports.PrivateTxState.OK && !!tx && (tx.receipt?.status === 1 || typeof tx.receipt?.status === "undefined");
}
function isTxIndeterminate(tx) {
  if (!tx?.privateTx)
    return false;
  return tx?.privateTx?.state === exports.PrivateTxState.INDETERMINATE;
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
var reducer = toolkit.createReducer(initialState, (builder) => builder.addCase(addTransaction, (transactions, { payload: { chainId, from, hash, approval, summary, claim, privateTx = false } }) => {
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
    ...privateTx ? { privateTx: { state: exports.PrivateTxState.UNCHECKED, status: void 0 } } : {}
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
  if (prevState && (prevState === exports.PrivateTxState.ERROR || prevState === exports.PrivateTxState.INDETERMINATE || prevState === exports.PrivateTxState.OK))
    return;
  let state = exports.PrivateTxState.PROCESSING;
  if (status.receivedAt && status.relayedAt && !status.relayFailure && status.minedAt)
    state = exports.PrivateTxState.OK;
  if (status.receivedAt && status.relayFailure && status.relayResponses && Object.values(status.relayResponses).reduceRight((prev, current) => {
    if (prev)
      return prev;
    if (current.error || current.response.error)
      return true;
    return false;
  }, false))
    state = exports.PrivateTxState.ERROR;
  if (status.receivedAt && status.relayedAt && status.relayFailure && status.minedAt)
    state = exports.PrivateTxState.INDETERMINATE;
  if (minutesElapsed > 3)
    state = exports.PrivateTxState.INDETERMINATE;
  tx.privateTx.state = state ?? exports.PrivateTxState.UNCHECKED;
  tx.privateTx.status = status;
}));

var reducer$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    initialState: initialState,
    'default': reducer
});

var index$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ChainId: ChainId,
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

exports.AddressZero = AddressZero$1;
exports.Fn = index$1;
exports.HttpJsonRpcError = HttpJsonRpcError;
exports.JsonRpc = index$4;
exports.PrivateTransaction = privateTransaction;
exports.Result = index;
exports.SecureRpc = index$3;
exports.SushiGuard = index$2;
exports.Timeout = timeout$1;
exports.Value = value;
exports.ValueRef = ValueRef;
exports.addTransaction = addTransaction;
exports.checkedTransaction = checkedTransaction;
exports.clearAllTransactions = clearAllTransactions;
exports.fetchJsonRpc = fetchJsonRpc;
exports.finalizeTransaction = finalizeTransaction;
exports.isJsonRpcError = isJsonRpcError;
exports.isJsonRpcSuccess = isJsonRpcSuccess;
exports.isTxExpired = isTxExpired;
exports.isTxIndeterminate = isTxIndeterminate;
exports.isTxPending = isTxPending;
exports.isTxSuccessful = isTxSuccessful;
exports.privateTx = privateTx;
exports.txMinutesPending = txMinutesPending;
exports.updatePrivateTxStatus = updatePrivateTxStatus;
exports.validateJsonRpcResponse = validateJsonRpcResponse;
//# sourceMappingURL=index.js.map
