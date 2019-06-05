# JSON-RPC Typescript/Javascript wrapper

![https://www.npmjs.com/package/json-rpc3](https://img.shields.io/npm/v/json-rpc3.svg)
![https://travis-ci.org/industral/json-rpc3](https://api.travis-ci.org/industral/json-rpc3.svg?branch=master)
![https://david-dm.org/industral/json-rpc3](https://david-dm.org/industral/json-rpc3/status.svg)
![https://david-dm.org/industral/json-rpc3?type=dev](https://david-dm.org/industral/json-rpc3/dev-status.svg)
![https://packagephobia.now.sh/result?p=json-rpc3](https://packagephobia.now.sh/badge?p=json-rpc3)
![https://github.com/industral/json-rpc3/blob/master/LICENSE](https://img.shields.io/npm/l/json-rpc3.svg)

Lightweight JSON-RPC Typescript/Javascript wrapper.
Works with both browser and Node.js.


### Example of use


##### Basic call

```javascript
// In case running on Node.js, install and export globally `fetch`
import fetch from 'node-fetch';
global.fetch = fetch;

const json_rpc = new JSON_RPC({url: 'YOUR_URL'});
const results = await json_rpc.calls([{
  method: 'YOUR_METHOD',
  params: {}
}]);

const result = results.get();
```


##### Batch call, access by index
```javascript
const results = await json_rpc.calls([{
  method: 'YOUR_METHOD_1',
  params: {}
}, {
  method: 'YOUR_METHOD_2',
  params: {}
}]);

const result1 = results.get(0); // access by index
const result2 = results.get(1);
```

##### Batch call, access by id

```javascript
const id1 = new Date().valueOf();
const id2 = new Date().valueOf() + 1;

const results = await json_rpc.calls([{
  id: id1,
  method: 'YOUR_METHOD_1',
  params: {}
}, {
  id: id2,
  method: 'YOUR_METHOD_2',
  params: {}
}]);

const result2 = results.getById(id2);
const result1 = results.getById(id1);
```

### Build (development)

```bash
npm ci
npm build:watch
```

### Build (production)

Will produce `esm`, `cjs` and `bundle` modules.

```bash
npm run build
```


### Test

```bash
npm run test
```
