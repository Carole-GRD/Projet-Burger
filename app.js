
const express = require('express');

const app = express();

require('dotenv-flow').config();

const { NODE_ENV, MESSAGE } = process.env;
console.log('Lancé en', NODE_ENV, ':', MESSAGE);