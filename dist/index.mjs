class t extends Error{constructor(t,e,r){super(t),this.req=e,this.res=r}}function e(e,{jsonrpc:r="2.0",id:s=(new Date).getTime(),method:n="",params:o=[]}){return fetch(e,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({jsonrpc:r,id:s,method:n,params:o})}).then((e=>{if(200!==e.status)throw new t(e.statusText,{jsonrpc:r,id:s,method:n,params:o},e);return e.json()}))}export{t as HttpJsonRpcError,e as fetchJsonRpc};
//# sourceMappingURL=index.mjs.map