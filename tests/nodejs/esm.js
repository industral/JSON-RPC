import {expect} from 'chai';
import fetch from 'node-fetch';
import JSON_RPC from '../../dist/esm/index.js';

global.fetch = fetch;
global.JSON_RPC = JSON_RPC;
global.expect = expect;

require('../main.js');
