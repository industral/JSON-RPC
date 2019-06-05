# JSON-RPC Typescript/Javascript wrapper


Lightweight JSON-RPC Typescript/Javascript wrapper.
Works with both browser and Node.js.


### Example of use


```javascript
// In case running on Node.js, install and export globally `fetch`
import fetch from 'node-fetch';
global.fetch = fetch;

// basic
const json_rpc = new JSON_RPC({url: 'YOUR_URL'});
const results = await json_rpc.calls([{
  method: 'YOUR_METHOD',
  params: {}
}]);

const result = results.get();

// batch call access by index
const results = await json_rpc.calls([{
  method: 'YOUR_METHOD_1',
  params: {}
}, {
  method: 'YOUR_METHOD_2',
  params: {}
}]);

const result1 = results.get(0); // access by index
const result2 = results.get(1);

// batch call access by id
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
