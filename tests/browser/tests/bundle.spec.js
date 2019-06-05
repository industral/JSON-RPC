import {expect} from 'chai';

window.expect = expect;
window.JSON_RPC = JSON_RPC.default;

require('../../main.js');
