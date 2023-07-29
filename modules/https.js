'use strict';

import internals from './internals/index.js';
import {get} from 'https';

get('https://www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log(`Data Chunk: ${chunk}`);
  }),
    res.on('end', () => {
      console.log('No more data');
    })
});

const requestData = (url, data) => {
  internals.send(url, data);
  return internals.read();
}

const res = requestData('https://google.com', 'si data..aa');

console.log(res);
