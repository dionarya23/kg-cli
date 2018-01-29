#!/usr/bin/env node
var args = process.argv.splice(process.execArgv.length + 2);
var name = args[0];
var kg = require('../lib/index.js');
kg.kata(name);