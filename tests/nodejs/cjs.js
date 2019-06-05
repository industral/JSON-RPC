global.fetch = require('node-fetch');
global.JSON_RPC = require('../../dist/cjs/index.js').default;
global.expect = require('chai').expect;

require('../main.js');
