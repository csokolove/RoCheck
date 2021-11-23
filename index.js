#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

clear();

console.log(
  chalk.red(
    figlet.textSync('RoCheck', { horizontalLayout: 'full' })
  )
);

const check = require('./lib/check');

check();