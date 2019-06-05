import {expect} from 'chai';
import JSON_RPC from '../../../dist/esm/index.js'

window.expect = expect;
window.JSON_RPC = JSON_RPC;

require('../../main.js');
